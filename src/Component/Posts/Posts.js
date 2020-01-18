import React from 'react'
import AddPost from './AddPost'
import PostsList from './PostsList'
import { connect } from 'react-redux'
import {AddPosT,GetPosts} from '../../Action'



class Posts extends React.Component{
    componentDidMount(){
        this.props.GetPosts()
    }
    render(){
        return<div className='container'>
            <AddPost purpose='Post Something' placeholder='Leave a post' onAdd={this.props.AddPosT}/>
            <hr/>
            <PostsList/>
        </div>
    }
}
export default connect(null,{AddPosT,GetPosts})(Posts)