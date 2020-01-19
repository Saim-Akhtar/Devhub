const ChatRooms=require('../models/chatRoom')
const User=require('../models/user')

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

const send_message=async(data)=>{
    const roomId=data.roomId
    const message=data.message
    const senderId=data.senderId
    // Sending message to a room
    socket.broadcast.to(roomId).emit('messageOut',{roomId,message})
    try {
        const room=await ChatRooms.findOne({"roomId":roomId})
        room.lastUpdated=Date(Date.now())
        await room.messages.push({
            _id:mongoose.Types.ObjectId(),
            sender:senderId,
            text:message
        })
        await room.save()
    } catch (error) {
        console.log(error)
    }
}

const roomExists=async(rooms,senderId,receiverId)=>{
    for(let roomIter of rooms){
        const user_ids=roomIter.chat_users.map(user=>user.chat_user_id.toString())
        if(user_ids.includes(senderId) && user_ids.includes(receiverId)){
            return rooms.roomId
        }
    }
    return null
}

const start_chat=async(data)=>{
    const message=data.message
    const senderId=data.senderId
    const receiverId=data.receiverId
    const chatType=senderId === receiverId ? 'single':'private'
    let rooms;
    try {
        if(chatType === 'single'){
            rooms=await ChatRooms.find({'chat_type':'single'}).select('roomId chat_users')    
        }
        else{
            rooms=await ChatRooms.find({'chat_type':'private'}).select('roomId chat_users')
        }
        
        roomId=roomExists(rooms,senderId,receiverId)
        if(room !== null){
            send_message({roomId,message,senderId})
        }
        else{
            const newChat=new ChatRooms({
                roomId:mongoose.Types.ObjectId(),
                chat_users: [{chat_user_id: senderId},{chat_user_id:receiverId}],
                chat_type: chatType,
                messages:[{
                    _id:mongoose.Types.ObjectId(),
                    sender:senderId,
                    text:message
                }]
            })
            await newChat.save()
        }

    } catch (error) {
        console.log(error)
    }
}

const socketIO=async (serverSocket)=>{
    socket=serverSocket
    console.log(socket)
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
