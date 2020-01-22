import React from 'react'
import ChatList from './ChatList'
import ChatRoom from './ChatRoom'
import { Route } from 'react-router-dom'

class Chat extends React.Component{
    render()
    {
        return<div>
            <div className='messaging chat'>
            <div className='inbox_msg'>
                <ChatList/>
                <Route path={`/chat`} exact render={()=>{return <div>chat home</div>}}/>
                <Route path='/chat/:id' exact component={ChatRoom}/>
            </div>
            </div>
        </div>
    }
}
export default Chat