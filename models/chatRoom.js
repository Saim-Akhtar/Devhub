const mongoose=require('mongoose')

const chat_users_schema=mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},{_id:false})

const messagesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    createdAt:{type: String,default: Date(Date.now()), required: true },
    text:{type: String, required: true},
    sender:{type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const chatRoomSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    chat_users:[chat_users_schema],
    roomId:{type: String, required: true},
    startedAt:{type: String,default: Date(Date.now()) },
    lastUpdated: {type: String,default: Date(Date.now()) },
    messages:[messagesSchema]
})

module.exports=mongoose.model('ChatRooms',chatRoomSchema)