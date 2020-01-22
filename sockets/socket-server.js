const ChatRooms=require('../models/chatRoom')
const User=require('../models/user')
const mongoose=require('mongoose')

let socket;
const join_userRooms=async(data)=>{
    const userId=data.userId
    try {
        const userRooms=await ChatRooms.find({"chat_users.user": userId}).select('roomId')
        const rooms=userRooms.map(room=> room.roomId)
        socket.join(rooms)
    } catch (error) {
        console.log(error)
    }
}

const leave_userRooms=async(data)=>{
    const userId=data.userId
    try {
        const userRooms=await ChatRooms.find({"chat_users.user": userId}).select('roomId')
        const rooms=userRooms.map(room=> room.roomId)
        socket.leave(rooms)
    } catch (error) {
        console.log(error)
    }
}

const get_userRooms=async(data)=>{
    const userId=data.userId
    try {
        const userRooms=await ChatRooms.find({"chat_users.user": userId}).select('roomId chat_users lastUpdated')
        // Sending All User Rooms to client
        socket.emit('userRooms_response',{userRooms})
    } catch (error) {
        socket.emit('userRooms_response',{error})
    }
}

const get_chatRoom=async(data)=>{
    const roomId=data.roomId
    try {
        const chat=await ChatRooms.findOne({"roomId": roomId})
        // Sending A Requested Chat Room to client
        socket.emit('chatRoom_response',{chat})
    } catch (error) {
        socket.emit('chatRoom_response',{error})
    }
}
const roomExists=async(rooms,senderId,receiverId)=>{
    for(let roomIter of rooms){
        const user_ids=roomIter.chat_users.map(user=>user.chat_user_id.toString())
        if(user_ids.includes(senderId) && user_ids.includes(receiverId)){
            return roomIter.roomId
        }
    }
    console.log("room doesnt exist")
    return null
}

const send_message=async(data)=>{
    const roomId=data.roomId
    const message=data.message
    const senderId=data.senderId
    console.log("sending message")
    // Sending message to a room
    socket.broadcast.to(roomId).emit('messageOut',{roomId,message})
    try {
        // console.log(roomId)
        const room=await ChatRooms.findOne({"roomId":roomId})
        // console.log(room)
        room.lastUpdated=Date(Date.now())
        await room.messages.push({
            _id:mongoose.Types.ObjectId(),
            sender:senderId,
            text:message
        })
        await room.save()
    } catch (error) {
        console.log("error in sending message")
        console.log(error)
    }
}

const start_chat=async(data)=>{
    const message=data.message
    const senderId=data.senderId
    const receiverId=data.receiverId
    const chatType=senderId === receiverId ? 'single':'private'
    let rooms;
    try {
        if(chatType === 'single'){
            console.log("single chat")
            rooms=await ChatRooms.find({'chat_type':'single'}).select('roomId chat_users')    
        }
        else{
            console.log("private chat")
            rooms=await ChatRooms.find({'chat_type':'private'}).select('roomId chat_users')
        }
        
        roomId=await roomExists(rooms,senderId,receiverId)
        console.log(roomId)
        if(roomId !== null){
            console.log('room exist')
            send_message({roomId,message,senderId})
        }
        else{
            console.log('starting chat')
            const newChat=new ChatRooms({
                roomId:mongoose.Types.ObjectId(),
                chat_users: [{chat_user_id: senderId},{chat_user_id:receiverId}],
                chat_type: chatType,
                // messages:[{
                //     _id:mongoose.Types.ObjectId(),
                //     sender:senderId,
                //     text:message
                // }]
            })
            console.log("now saving")
            const room= await newChat.save()
            send_message({roomId:room.roomId,message:message,senderId:senderId})
        }

    } catch (error) {
        console.log("error in starting chat")
        console.log(error)
    }
}

const socketIO=async (serverSocket)=>{
    socket=serverSocket
    // console.log(socket)
    // an emit message from client will be generated to join user rooms from database
    socket.on('join_userRooms',join_userRooms)
    // Get All the rooms of user socket
    // socket.on('get_userRooms',get_userRooms)
    // Get all the messages of a specific chat room
    // socket.on('get_chatRoom',get_chatRoom)
    // An emit message from client to message all other users in chat room
    socket.on('send_message',send_message)
    // Starting the chat, creating a chat room
    socket.on('start_chat',start_chat)

    // an emit message from client will be generated to leave user rooms
    socket.on('leave_userRooms',leave_userRooms)
}

module.exports=socketIO
