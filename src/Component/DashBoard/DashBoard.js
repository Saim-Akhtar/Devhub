import React from 'react'
import { Link } from 'react-router-dom'
import Experince from './Experience'
import {connect} from 'react-redux'
import {GetUser} from '../../Action'

class  DashBoard extends React.Component{
    
    componentDidMount(){
        let a=JSON.parse(localStorage.token)
        this.props.GetUser(a.username)
    }
    render(){
        if(!this.props.isLoggedin){
            return<div className='text-center'><div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div></div>
        }
        return<div className='container'>
            <h1 className='text-danger'>DashBoard</h1>
            <h2><i className='fa fa-user pr-1'></i> Welcome User</h2>
            <Link to='/editprofile' className='btn btn-secondary' style={{marginRight:10}}><i className='fa fa-id-badge pr-1'></i>Edit Skills</Link>
            <Link to='/experform' className='btn btn-secondary'><i className='fa fa-briefcase pr-1'></i>Add Experience</Link>
            <hr/>
            <Experince/>
            
        </div>
    }
}
const mapStateToProps=state=>{
    return{
      isLoggedin:state.Auth.isLoggedin,
      username:state.Auth.username
    } 
  }
export default connect(mapStateToProps,{GetUser})(DashBoard)