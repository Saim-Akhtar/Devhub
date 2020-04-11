import socketIOClient from 'socket.io-client';
const endpoint="http://localhost:8000"
const data=JSON.parse(localStorage.getItem('token'))

let socket;
if(data){
    console.log("authorized")
    socket=socketIOClient(endpoint, { query: "userId="+ data.id})
}



export const socketCall=(mess,senderId,id)=>{
    console.log(mess,senderId,id)
    socket.emit('start_chat',{message:mess,senderId:senderId,receiverId:id})
}
export const socketGetMessage=()=>{
    console.log("Get Message in room")
    socket.on('messageOut',(data)=>{
        console.log(data)
    })
}
