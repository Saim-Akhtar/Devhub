const mongoose= require('mongoose')

const commentSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment_text:String,
})

const repoSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title:String
})

const postSchema =mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content:String,
    links:[String],
    repo_attached:Boolean,
    repo:repoSchema,
    createdAt:String,
    comments:[commentSchema]
})

module.exports=mongoose.model('Post',postSchema)