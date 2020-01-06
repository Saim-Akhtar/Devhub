import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Action'
import "./App.css"

let  Navbar= (props)=> {
        console.log(props.isLoggedin)
      
        return <div className="row"><nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 col-sm-12">
        <div className="container">
          <Link className="navbar-brand" to='/'>DevHub</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/developers"className="nav-link" > Developers
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {props.isLoggedin && <>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">DashBoard <i className='fa fa-user pr-1'></i></Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" onClick={props.signOut} to='/'>Logout <i className="fa fa-sign-out-alt pr-1"></i></Link>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
}
const mapStateToProps=state=>{
  return{
    isLoggedin:state.Auth.isLoggedin
  } 
}
export default connect(mapStateToProps,{signOut})(Navbar)