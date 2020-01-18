import React from 'react'
import { Link } from 'react-router-dom'
import {GetAllUsers,GetUser} from '../../Action'
import { connect } from 'react-redux'



class DeveloperList extends React.Component{
    componentDidMount(){
      this.props.GetAllUsers()
    }
    render(){
        if(!this.props.Developers.users)
        return <div className='text-center' style={{marginTop:10}}><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>
        return <div className="jumbotron">
          {this.props.Developers.users.map(developer=>{ 
                if(developer.github){
                  return<div className="card card-body bg-light mb-3">
                  <div className="row">
                    <div className="col-2">
                      <img className="rounded-circle" src={developer.profilePic} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                      <h3>{`${developer.github.firstName} ${developer.github.lastName}`}</h3>
                      <p>{developer.github.userName}</p>
                      <p>{developer.location}</p>
                      <Link to={'/developer/'+developer.github.userName} className="btn btn-info"  style={{marginRight:10}}>View Profile</Link>
                      <Link to={`/chat/${this.props.id}${developer._id}`} className="btn btn-info"  style={{marginRight:10}}>Send Message</Link>
                      
      
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                      <h4>Skill Set</h4>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1"></i>HTML</li>
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1"></i>CSS</li>
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1"></i>JavaScript</li>
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1"></i>Python</li>
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1"></i>C#</li>
                      </ul>
                    </div>
                  </div>
                </div>
                }
              })}
            
          
        </div>
    }
}
let mapStateToProps=state=>{
  return{
    Developers:state.Developers,
    id:state.Auth.id
  }
}
export default connect(mapStateToProps,{GetAllUsers,GetUser})(DeveloperList)