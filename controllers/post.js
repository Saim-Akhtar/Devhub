const Post = require('../models/post');
const User = require('../models/user')
const mongoose = require('mongoose')

module.exports={
    getPost:async(req,res,next)=>{
        try {
            const postId=req.params.postId
            const post=await Post.findById(postId)
            if(!post){
                throw Error("Post Doesn't Exist")
            } 
            res.status(200).json({post})
        } catch (error) {
            res.status(404).json({
                error:error.message,
                status:404
            })    
        }
        
    },
    addPost:async(req,res,next)=>{
        try {
            console.log("adding teh post")
            const newPost=new Post({
                _id: mongoose.Types.ObjectId(),
                user_id:req.body.user_id,
                content:req.body.content,
                repo_attached:req.body.repo_attached, 
                repo:{
                    _id:mongoose.Types.ObjectId(),
                    repo_user_id:req.body.repo_user_id,
                    repo_title:req.body.repo_title
                }
            })
            const data=await newPost.save();
            res.status(200).json({
                message:"Post created",
                data:data
            })
        } catch (error) {
            res.status(404).json({
                error:error.message,
                status:404
            })
        }
    },
    addComment:async(req,res,next)=>{
        const postId=req.params.postId
        try {
            const post=await Post.findById(postId)
            if(!post){
                throw Error("Post Doesn't Exist")
            }
            post.comments.push({
                _id:mongoose.Types.ObjectId(),
                comment_user_id:req.body.comment_user_id,
                comment_text:req.body.comment_text
            })
            const data=await post.save()
            res.status(200).json({
                message:"Comment added",
                data:data
            })

        } catch (error) {
            res.status(404).json({
                error:error.message,
                status:404
            })
        }
    }
}