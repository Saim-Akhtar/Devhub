import { onSuccess } from "../Api/AuthApi"
import History from '../History'
import { getUser,getRepos,getRepo,getFollowers,getFollowing } from "../Api/Api"

export const signIn=(response)=>async dispatch=>{
   
    History.push('/dashboard')
    let data=await onSuccess(response)
    dispatch({type:"SIGN_IN",payload:data})
    
}
export const signOut=()=>{
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