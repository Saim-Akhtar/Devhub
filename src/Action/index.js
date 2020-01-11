import { onSuccess } from "../Api/AuthApi"
import History from '../History'
import { getUser,getRepos,getFollowers,getFollowing } from "../Api/Api"

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
export const openChatNav=()=>{
    return{
        type:"OPEN_CHAT_NAV"
    }
}

export const closeChatNav=()=>{
    return{
        type:"CLOSE_CHAT_NAV"
    }
}
export const signOut=()=>{
    localStorage.clear()
    return{type:"SIGN_OUT"}
}
export const onSearch=(value)=>async dispatch=>{
    let data=await getUser(value)
    dispatch({type:"GET_USER_GIT",payload:data})    
    History.push(`/search/${value}`)
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