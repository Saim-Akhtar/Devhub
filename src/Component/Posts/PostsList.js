import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class PostsList extends React.Component{
    render(){
      if(!this.props.posts)
        return<div className='text-center'><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>
      // console.log(this.props.posts)
        return<>
            {
              this.props.posts.map(post=>{
                return<div className="jumbotron" key={post._id}>
                <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img className="rounded-circle" src={post.user_id.profilePic} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
              <h3>{post.user_id.github.userName}</h3>
              <p>{ post.content}</p>
                    <Link to={`post/${post._id}`} className="btn btn-info">Reply</Link>
                  </div>
                </div>
              </div>
              
            </div>
              })
    }
        </>
    }
}
let mapStateToProps=state=>{
  return{
    posts:state.Post.posts
  }
}
export default connect(mapStateToProps)(PostsList)