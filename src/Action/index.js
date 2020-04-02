import { onSuccess } from "../Api/AuthApi"
import {getRepos,getFollowers,getFollowing,getStarredRepos, getAllUsers,getUser, updateUser, addPost, getPosts, getPost, addComment } from "../Api/Api"
import History from '../History'
import { getChats,getChat } from "../Api/ChatApi"

export const signIn=(response)=>async dispatch=>{
   
    History.push('/')
    let data=await onSuccess(response)
    dispatch({type:"SIGN_IN",payload:data})
    
}
export const checkedLoggedIn=(data)=>{
    return{
        type:"CHECKED_LOGGED_IN",
        payload:data
    }
}
export const GetAllUsers=()=>async dispatch=>{
        let data=await getAllUsers()
        dispatch({type:"GET_ALL_USERS",payload:data})
}
export const UpdateUser=(value,userId)=>async dispatch=>{
    let data=await updateUser(value,userId)
    console.log(data)
    History.push('/')    
}
export const signOut=()=>{
    localStorage.clear()
    return{type:"SIGN_OUT"}
}
export const GetUser=(value)=>async dispatch=>{
    let data=await getUser(value)
    dispatch({type:"GET_USER",payload:data})    
}
export const getReposits =(value)=>async dispatch=>{
    let data=await getRepos(value)
    dispatch({type:"GET_GIT_REPOS",payload:data})
}
export const GetFollowers=value=>async dispatch=>{
    let data= await getFollowers(value)
    dispatch({type:"GET_GIT_FOLLOWERS",payload:data})
}
export const GetFollowing=value=>async dispatch=>{
    let data= await getFollowing(value)
    dispatch({type:"GET_GIT_FOLLOWING",payload:data})
}
export const AddPosT=post=>async dispatch=>{
    await addPost(post)
    let data=await getPosts()
    dispatch({type:"ADD_POST",payload:data})
}
export const GetStarredRepos=value=>async dispatch=>{
    let data=await getStarredRepos(value)
    dispatch({type:"GET_GIT_STARRED_REPOS",payload:data})
}
export const  GetPosts=()=>async dispatch=>{
    let data=await getPosts()
    dispatch({type:"GET_POSTS",payload:data})
}
export const GetPost=(postId)=>async dispatch=>{
    let data= await getPost(postId)
    console.log(data)
    dispatch({type:"GET_POST",payload:data})
}
export const AddComment=(postId,comment)=>async dispatch=>{
    await addComment(postId,comment)
    let data=await getPost(postId)
    console.log(data)
    dispatch({type:"GET_POST",payload:data})
    History.push(`/post/${postId}`)
}
export const GetChats=()=>async dispatch=>{
    let data=await getChats()
    dispatch({type:"GET_CHATS",payload:data})
}
export const GetChat=(roomId)=>async dispatch=>{
    let data=await getChat(roomId)
    dispatch({type:"GET_CHAT",payload:data})
}
