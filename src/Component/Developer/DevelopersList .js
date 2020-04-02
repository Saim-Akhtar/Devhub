import React from 'react'
import { Link } from 'react-router-dom'
import {GetAllUsers,GetUser} from '../../Action'
import { connect } from 'react-redux'
import ModalExample from '../Modal'



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
                // console.log(developer)
                if(developer.github){
                  return<div className="card card-body bg-light mb-3" key={developer._id}>
                  <div className="row">
                    <div className="col-2">
                      <img className="rounded-circle" src={developer.profilePic} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                      <h3>{`${developer.github.firstName} ${developer.github.lastName}`}</h3>
                      <p>{developer.github.userName}</p>
                      <p>{developer.location}</p>
                      <Link to={'/developer/'+developer.github.userName} className="btn btn-info"  style={{marginRight:10}}>View Profile</Link>
                      {/* <Link to={`/chat`} className="btn btn-info"  style={{marginRight:10}}>Send Message</Link> */}
                      <ModalExample buttonLabel={'Send Message'} id={developer._id} />
      
                    </div>
                    {/* {!developer.skillSet && <div> no skills registered</div>} */}
                    <div className="col-md-4 d-none d-lg-block">
                      <h4>{developer.skillSet.length>1?'Skills Set':'No Skills Registered'}</h4>
                      <ul className="list-group">
                        {developer.skillSet.map(skill=>{
                          return<li className="list-group-item" key={skill}>
                        <i className="fa fa-check pr-1"></i>{skill}</li>
                        })}
                        
                        
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