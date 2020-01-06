import React from 'react'
import {Link} from 'react-router-dom'

class PostsList extends React.Component{
    render(){
        return<>
            <div className="jumbotron">
            <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460&v=4" alt="" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>Mohammad</h3>
                <p>is pic mai ap ho?</p>
                <Link to='post/1' className="btn btn-info">Reply</Link>
              </div>
            </div>
          </div>
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460&v=4" alt="" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>Mohammad</h3>
                <p>is pic mai ap ho?</p>
                <Link to='post/1' className="btn btn-info">Reply</Link>
              </div>
            </div>
          </div>
          
        </div>
        
        </>
    }
}
export default PostsList