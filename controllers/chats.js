const mongoose = require('mongoose')
const Chats=require('../models/chatRoom')

module.exports={
    getAllChats:async(req,res,next)=>{
        // Fetch all the chats of user using user.id
        const user_id=req.user._id
        try {
            const userRooms=await Chats.find({"chat_users.chat_user_id": user_id})
                            .select('roomId chat_users lastUpdated')
                            .populate('chat_users.chat_user_id','_id github.userName profilePic')
            res.status(200).json({
                total_rooms:userRooms.length,
                rooms:userRooms
            })
        } catch (error) {
            res.status(404).json({
                error:error
            })
        }
    },
    getChat:async(req,res,next)=>{
    // Fetch a specific chat of user using user.id
    const roomId=req.params.roomId
    try {
        const chat=await Chats.findOne({"roomId": roomId})
                        .populate('chat_users.chat_user_id','_id github.userName profilePic')
        // Sending A Requested Chat Room to client
        res.status(200).json({
            chat:chat
        })
    } catch (error) {
        res.status(404).json({
            error:error
        })
    }
    }
}