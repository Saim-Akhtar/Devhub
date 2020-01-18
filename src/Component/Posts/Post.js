import React from 'react'
import AddPost from './AddPost'
import {Link} from 'react-router-dom'
import {GetPost,AddComment} from '../../Action'
import Reply from './Reply'
import { connect } from 'react-redux'


class Post extends React.Component{
    componentDidMount(){
        this.props.GetPost(this.props.match.params.id)
    }
    juggar=(comment)=>{
      this.props.AddComment(this.props.match.params.id,comment)
    }
    render(){
      if(!this.props.post)
        return<div>loading</div>
        return<div className='container'>
            <Link  className='btn btn-info' to='/posts'>Back to Posts</Link>
            <hr/>
            <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src={this.props.post.user_id.profilePic} alt="" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>{this.props.post.user_id.github.userName}</h3>
                <p>{this.props.post.content}</p>
              </div>
            </div>
          </div>
            <AddPost purpose='Leave a comment' placeholder='leave a reply' onAdd={this.juggar}/>
            <hr/>
            <Reply/>
        </div>
    }
}
let mapStateToProps=state=>{
  return{
    post:state.Post.post
  }
}
export default connect(mapStateToProps,{GetPost,AddComment})(Post)