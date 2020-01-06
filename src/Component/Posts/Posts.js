import React from 'react'
import AddPost from './AddPost'
import PostsList from './PostsList'


class Posts extends React.Component{
    render(){
        return<div className='container'>
            <AddPost purpose='Post Something' placeholder='Leave a post'/>
            <hr/>
            <PostsList/>
        </div>
    }
}
export default Posts