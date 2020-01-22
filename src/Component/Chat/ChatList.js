import React from 'react'
import './chat.css'
import {Link} from 'react-router-dom'
class ChatList extends React.Component{
    componentDidMount(){
      // console.log(this.props.match.params.id)
    }
    render(){

        let list=[1,2,3,4,5,6,7]
        return<div className='inbox_people'>
            <div className="inbox_chat">
              {
                list.map(li=>{
                  return <Link className="chat_list active_chat btn btn-info bg-dark" key={li} to={`/chat/${li}`}>
                  <div className="chat_people">
                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                    <div className="chat_ib">
                      <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                      <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                  </div>
                </Link>
                })
              }

            
        </div>
        </div>
    }
}
export default ChatList