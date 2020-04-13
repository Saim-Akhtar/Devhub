import React from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
import {socketCall} from '../../Chatmerge'
import {socketGetMessage} from '../../Chatmerge'
import {GetChat,NewMessage} from '../../Action'
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux'
class ChatRoom extends React.Component{
  async UNSAFE_componentWillReceiveProps(nextProps){
    
    // if(nextProps.match.params.id != this.props.match.params.id){
    //   this.props.GetChat(nextProps.match.params.id)
    //   console.log("now getting proprs")
    // }
    
  }
  
    componentDidMount(){
    this.props.GetChat(this.props.match.params.id)
    socketGetMessage(this.props.NewMessage)
  }
  state={mess:'',data:{}}
  onSubmit=e=>{
    e.preventDefault()
    const id=this.props.chat.chat_users[1].chat_user_id._id
    // console.log(this.props.chat.chat_users[0].chat_user_id._id)
    const senderId=JSON.parse(localStorage.token).id
    // console.log(this.state.mess,senderId,id)
    socketCall(this.state.mess,senderId,id)
    this.setState({mess:''})
  }
    messageCheck=(message)=>{
      let a=JSON.parse(localStorage.token) 
      if(a.id===message.sender){
        return <Outgoing text={message.text}/>
      }
      else{
        return <Incoming text={message.text}/>
      }
    }
    render(){
      if(!this.props.chat)
      return<div>loading</div>
        return<div className='mesgs'>
            <div className="msg_history">
              {
                this.props.chat.messages.map(message=>{
                 
                    return<div>
                      {
                        this.messageCheck(message)
                      }
                    </div>
                    
                })
              }
            
            
          </div>
          <div className="type_msg">
            <div className="input_msg_write">
              <form onSubmit={this.onSubmit}>
              <input type="text" className="write_msg" placeholder="Type a message" value={this.state.mess} onChange={e=>{this.setState({
                mess:e.target.value
              })}}/>
              <button className="msg_send_btn" type="button" type='submit' ><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
        </div>
    }
}
let mapStateToProps=state=>{
  return{
    chat:state.Chats.chat
  }
}
export default connect(mapStateToProps,{GetChat,NewMessage})(ChatRoom)