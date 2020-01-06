import React from 'react'
import { Link } from 'react-router-dom'


class DeveloperList extends React.Component{
    render(){
        return <div className="jumbotron">
            <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460" alt="" />
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>Mohammad</h3>
                <p>Developer at Babusoft</p>
                <p>Karachi ka hun</p>
                <Link to='/developer/1' className="btn btn-info" style={{marginRight:10}}>View Profile</Link>
                {/* <a href="profile.html" className="btn btn-info">Chat</a> */}

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
          
        </div>
    }
}
export default DeveloperList