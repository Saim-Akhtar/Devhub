let api='http://localhost:8000'//http://localhost:8000/user/mauwia
let header={
        'Content-Type': 'application/json'  
}
export const getChats=async ()=>{
    try{
        let a=JSON.parse(localStorage.token)
        console.log(a.token)
        let result=await fetch(`${api}/chats/?token=${a.token}`,{method:'GET',header})
        let data=await result.json();
        return data
        }
        catch(err){console.log(err)}
}
export const getChat=async (roomId)=>{
    try{
        let a=JSON.parse(localStorage.token)
        // console.log(a.token)
        let result=await fetch(`${api}/chats/${roomId}/?token=${a.token}`,{method:'GET',header})
        let data=await result.json();
        // console.log(data)
        return data
        }
        catch(err){console.log(err)}
}