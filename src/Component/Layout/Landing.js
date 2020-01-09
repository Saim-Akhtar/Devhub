import React from 'react'
import {connect} from 'react-redux'
import GitHubLogin from 'react-github-login';
import {onFailure} from '../../Api/AuthApi'
import {signIn} from '../../Action'


class Landing extends React.Component{
    render(){
        return <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Hub
                </h1>
                <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                <hr />
                {/* <Link to='register'  className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to='login' className="btn btn-lg btn-light">Login</Link> */}
                <GitHubLogin clientId="f5bbaa46fbf6ee2eb75e"
                  redirectUri="http://localhost:3000"
                  className='btn btn-secondary'
                  buttonText={<div><i className='fab fa-github pr-1'></i> Login Your Github</div>}
                  onSuccess={this.props.signIn}
                  onFailure={onFailure} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    }
}
export default connect(null,{signIn})(Landing)