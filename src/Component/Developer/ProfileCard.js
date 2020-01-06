import React from 'react'
import { Link } from 'react-router-dom'

class ProfileCard extends React.Component{
    render(){
        return<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460" alt="" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">John Doe</h1>
              <p className="lead text-center">Developer at Microsoft</p>
              <p>Seattle, WA</p>
              <p>
                <Link className="text-white p-2" to=''>
                  <i className="fas fa-globe fa-2x"></i>
                </Link>
                <Link className="text-white p-2" href="#">
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
                <Link className="text-white p-2" href="#">
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link className="text-white p-2" href="#">
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
                <Link className="text-white p-2" href="#">
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