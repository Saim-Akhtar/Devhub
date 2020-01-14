import React from 'react'
import { Link } from 'react-router-dom'

class ProfileCard extends React.Component{
    render(){
        // if(!this.props.login){
        //   return<div>User doesn't exist</div>
        // }
       
        return<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src={`${this.props.profilePic}`} alt="" />
              </div>
            </div>
            <div className="text-center">
    <h1 className="display-4 text-center">{`${this.props.name}`}</h1>
              <p className="lead text-center">Developer at Babusoft</p>
    <p>{this.props.location}</p>
              <p>
                <Link className="text-white p-2" to=''>
                  <i className="fas fa-globe fa-2x"></i>
                </Link>
                <Link className="text-white p-2" to=''>
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
                <Link className="text-white p-2" to=''>
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link className="text-white p-2" to=''>
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
                <Link className="text-white p-2" to=''>
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    }
}
export default ProfileCard