import React from 'react'
import Incoming from './Incoming'
import Outgoing from './Outgoing'
class ChatRoom extends React.Component{
  componentDidUpdate(){
    console.log(this.props.match.params.id)
  }
  state={mess:''}
  onSubmit=e=>{
    e.preventDefault()
    console.log(this.state.mess)
  }

    render(){
        return<div className='mesgs'>
            <div className="msg_history">
            <div className="outgoing_msg">
        <div className="sent_msg">
          <p>My chat id is {this.props.match.params.id} </p>
          <span className="time_date"> 11:01 AM    |    Today</span> </div>
      </div>
            <Incoming/>
            <Outgoing/>
            <Incoming/>
            <Outgoing/>
            <Incoming/>
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
export default ChatRoom