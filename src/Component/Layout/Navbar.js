import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut,onSearch,checkedLoggedIn,openChatNav,closeChatNav} from '../../Action'
import "./App.css"

class  Navbar extends React.Component{
        state={search:''}
        onSubmit=e=>{
            e.preventDefault()
            this.props.onSearch(this.state.search)
            this.setState({search:''})
        }
        componentDidMount(){
          if(localStorage.token){
              this.props.checkedLoggedIn(JSON.parse(localStorage.token))
          }
        }
        render(){
        // console.log(props.isLoggedin)
        return <div className="row"><nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-4 col-sm-12">
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
            <li className="nav-item">
              <form className="form-inline" onSubmit={this.onSubmit}>
               <input className="form-control mr-sm-2" onChange={e=>{this.setState({search:e.target.value});}} value={this.state.search} type="search" placeholder="Search Github User" aria-label="Search"/>
              {this.state.search && <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>}
              </form>
              </li>
              
              {this.props.isLoggedin && <>
                <li className='nav-item'>
                {!this.props.chatNav && <Link className='nav-link' to='/' onClick={this.props.openChatNav}>Chat</Link>}
                {this.props.chatNav && <Link className='nav-link' to='/' onClick={this.props.closeChatNav}>Close</Link>}
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">DashBoard <i className='fa fa-user pr-1'></i></Link>
              </li> */}
              <li className="nav-item">
                  <Link className="nav-link" onClick={this.props.signOut} to='/'>Logout <i className="fa fa-sign-out-alt pr-1"></i></Link>
              </li>
              </>}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
        }
}
const mapStateToProps=state=>{
  return{
    isLoggedin:state.Auth.isLoggedin,
    chatNav:state.ChatNav
  } 
}
export default connect(mapStateToProps,{signOut,onSearch,checkedLoggedIn,openChatNav,closeChatNav})(Navbar)