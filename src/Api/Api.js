import _ from 'lodash'
let api='http://localhost:8000'//http://localhost:8000/user/mauwia
let header={
        'Content-Type': 'application/json'  
}
export const getUser=async (value)=>{
    try{
    let result=await fetch(`${api}/user/${value}`,{method:'GET',header})
    let data=await result.json();
    return data
    }
    catch(err){console.log(err)}
}
export const getRepo=async (name,repo)=>{
    try{
        let result=await fetch(`${api}/user/${name}/repos/${repo}`,{method:'GET',header})
        let data=await result.json()
        console.log(data)
        return data
    }
    catch(err){console.log(err)}
}
export const getRepos=async (value)=>{
    try{
    let result=await fetch(`${api}/user/${value}/repos`,{method:'GET',header})
    let data=await result.json();
    return data
    }
    catch(err){console.log(err)}
}
export const getFollowers=async (value)=>{
    try{
    let result=await fetch(`${api}/user/${value}/followers`,{method:'GET',header})
    let data=await result.json();
    return data
    }
    catch(err){console.log(err)}
}
export const getFollowing=async (value)=>{
    try{
    let result=await fetch(`${api}/user/${value}/following`,{method:'GET',header})
    let data=await result.json();
    return data
    }
    catch(err){console.log(err)}
}