import React from 'react'

class Outgoing extends React.Component{
    render(){
        return<div className="outgoing_msg">
        <div className="sent_msg">
    <p>{this.props.text}</p>
           </div>
      </div>
    }
}
export default Outgoing