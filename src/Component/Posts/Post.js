import React from 'react'
import AddPost from './AddPost'
import {Link} from 'react-router-dom'
import Reply from './Reply'


class Post extends React.Component{
    render(){
        return<div className='container'>
            <Link  className='btn btn-info' to='/posts'>Back to Posts</Link>
            <hr/>
            <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460&v=4" alt="" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>Mohammad</h3>
                <p>is pic mai ap ho?</p>
              </div>
            </div>
          </div>
            <AddPost purpose='Leave a comment' placeholder='leave a reply'/>
            <hr/>
            <Reply/>
        </div>
    }
}
export default Post