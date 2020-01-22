import React from 'react'

class Incoming extends React.Component{
    render(){
        return<div className="incoming_msg">
        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>Test which is a new approach to have all
              solutions</p>
            <span className="time_date"> 11:01 AM    |    June 9</span></div>
        </div>
      </div>
    }
}
export default Incoming