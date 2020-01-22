const mongoose=require('mongoose')

const chat_users_schema=mongoose.Schema({
    chat_user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const messagesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    createdAt:{type: String,default: Date(Date.now()), required: true },
    text:{type: String, required: true},
    sender:{type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const chatRoomSchema=mongoose.Schema({
    roomId:{type: mongoose.Schema.Types.ObjectId,unique: true ,required: true},
    chat_users:[chat_users_schema],
    chat_type:{
        type: String,
        enum: ['single','private','group'],
        required: true
    },
    startedAt:{type: String,default: Date(Date.now()) },
    lastUpdated: {type: String,default: Date(Date.now()) },
    messages:[messagesSchema]
})

module.exports=mongoose.model('ChatRooms',chatRoomSchema)