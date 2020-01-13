const mongoose= require('mongoose')

const commentSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    comment_user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment_text:String,
    commentedAt:{type: Date,default: new Date().toLocaleDateString() },
})

const repoSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    repo_user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    repo_title:String
})

const postSchema =mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content:String,
    // links:[String],
    repo_attached:Boolean,
    repo:repoSchema,
    createdAt:{type: Date,default: new Date().toLocaleDateString() },
    comments:[commentSchema]
})

module.exports=mongoose.model('Post',postSchema)