import React from 'react'
import './chat.css'
import {Link} from 'react-router-dom'
import {GetChats} from '../../Action'
import { connect } from 'react-redux'
class ChatList extends React.Component{
    componentDidMount(){
      this.props.GetChats()
    }
    render(){
        if(!this.props.chats){
          return<div>Loading</div>
        }
        let a=JSON.parse(localStorage.token)
        let b=this.props.chats.map(chat=>chat.chat_users.filter(user=>a.id!==user.chat_user_id._id))
        // console.log(b)
        return<div className='inbox_people'>
            <div className="inbox_chat">
              {
                this.props.chats.map(li=>{
                  let b=li.chat_users.filter(user=>a.id!==user.chat_user_id._id)
                  // console.log(b)
                  return <Link className="chat_list active_chat btn btn-info bg-dark" key={li.roomId} to={`/chat/${li.roomId}`}>
                  <div className="chat_people">
                    <div className="chat_img rounded-circle"> <img src={`${b[0].chat_user_id.profilePic}`} alt="sunil"/> </div>
                    <div className="chat_ib">
                      <h5>{b[0].chat_user_id.github.userName} <span className="chat_date">Dec 25</span></h5>
                      <p>You Have New Message</p>
                    </div>
                  </div>
                </Link>
                })
              }

            
        </div>
        </div>
    }
}
let mapStateToProps=state=>{
  return{
    chats:state.Chats.rooms
  }
}
export default connect(mapStateToProps,{GetChats})(ChatList)