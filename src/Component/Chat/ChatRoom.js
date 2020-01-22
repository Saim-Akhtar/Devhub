import React from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
import {getChat} from '../../Api/ChatApi'
import { connect } from 'react-redux'
class ChatRoom extends React.Component{
  async componentWillReceiveProps(){
    let data=await getChat(this.props.match.params.id)
    this.setState({data})
    // console.log(this.state)
  }
  async componentDidMount(){
    let data=await getChat(this.props.match.params.id)
    this.setState({data})
    // console.log(this.state)
  }
  state={mess:'',data:{}}
  onSubmit=e=>{
    e.preventDefault()
    console.log(this.state.mess)
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
      
      if(!this.state.data.chat)
      return<div>loading</div>
        return<div className='mesgs'>
            <div className="msg_history">
              {
                this.state.data.chat.messages.map(message=>{
                  console.log(message)
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
              <button className="msg_send_btn" type="button" ><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
        </div>
    }
}
export default connect(null)(ChatRoom)