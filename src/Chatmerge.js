import socketIOClient from 'socket.io-client';
const endpoint="http://localhost:8000"
let socket=socketIOClient(endpoint)

export const socketCall=(mess,senderId,id)=>{
    console.log(mess,senderId,id)
    socket.emit('start_chat',{message:mess,senderId:senderId,receiverId:id})
}