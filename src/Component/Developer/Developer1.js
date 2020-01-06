import React from 'react'
import {Link, Route } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import SkillCard from './SkillCard'
import ExperienceCard from './ExperienceCard'
import EducationCard from './EducationCard'
import GitRepoCard from './GitRepoCard'

class Developer extends React.Component{
  mot=()=>{
    
  }
    render(){
      console.log(this.props)
        return <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <Link to='/developers' className="btn btn-light mb-3 float-left">Back To Profiles</Link>
                </div>
              </div>
              <ProfileCard/>
              <SkillCard/>
              <nav className="nav nav-pills nav-justified">
             <Link className="nav-item nav-link active" to='/developer/1/education' >Education</Link>
              <Link className="nav-item nav-link active" to='/developer/1/experience' >Experience</Link>
               <Link className="nav-item nav-link active" to="/developer/1/gitrepo">Git Repo</Link>
             <Link className="nav-item nav-link active" to='/developer/1/followers' >Followers</Link>
             <Link className="nav-item nav-link active" to='/developer/1/following' >Following</Link>

              </nav>
                <Route path='/developer/:id/education' exact component={EducationCard}/>
                <Route path='/developer/:id/experience' exact component={ExperienceCard}/>
                <Route path='/developer/:id/gitrepo' exact component={GitRepoCard}/>
                <Route path='/developer/:id/followers' exact render={()=>{return<div>coming soon</div>}}/>
                <Route path='/developer/:id/following' exact render={()=>{return<div>coming soon</div>}}/>

                 {this.props.location.pathname.split('/').length===4 &&<Link to='/developer/1'>ShowLess</Link>}
            </div>
          </div>
        </div>
      </div>
    
    }
}
export default Developer