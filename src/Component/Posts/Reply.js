import React from 'react'
import { connect } from 'react-redux'

class Reply extends React.Component{
    render(){
      if(!this.props.post)
        return<div>loading</div>
        return<div><div className="jumbotron" >
          {
            this.props.post.comments.map(comment=>{
              return<div className="card card-body bg-light mb-3" key={comment._id}>
              <div className="row">
                <div className="col-2">
                  <img className="rounded-circle" src={comment.comment_user_id.profilePic} alt="" />
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                  <h3>{comment.comment_user_id.github.userName}</h3>
                  <p>{comment.comment_text}</p>
                  <p>29/10/21</p>
          
                </div>
              </div>
            </div>
           
            })
          
    } </div>
      </div>
    }
}
let mapStateToProps=state=>{
  return{
    post:state.Post.post
  }
}
export default connect(mapStateToProps)(Reply)