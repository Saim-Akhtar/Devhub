import React from 'react'

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
                
                <a className="text-white p-2" href={this.props.facebook} target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a className="text-white p-2" href={this.props.twitter} target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a className="text-white p-2" href={this.props.linkedin} target='_blank' rel='noopener noreferrer'>
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    }
}
export default ProfileCard