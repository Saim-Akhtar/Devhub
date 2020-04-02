import React from 'react'
import {Link, Route } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import SkillCard from './SkillCard'
import ExperienceCard from './ExperienceCard'
import GitRepoCard from './GitRepoCard'
import { connect } from 'react-redux'
import {GetUser} from '../../Action'
import Follower from './Follower'
import Following from './Following'
import StarredRepo from './StarredRepo'

class Developer extends React.Component{
    componentDidMount(){
      this.props.GetUser(this.props.match.params.id)
    }
    render(){
        
        let {id}=this.props.match.params
        // console.log(this.props)
        if(!this.props.user)
        return<div className='text-center' style={{marginTop:10}}><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>
        return <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <Link to='/developers' className="btn btn-light mb-3 float-left">Back To Profiles</Link>
                </div>
              </div>
              <ProfileCard profilePic={this.props.user.profilePic} facebook={this.props.user.facbeookURL} twitter={this.props.user.twitterURL} linkedin={this.props.user.linkedinURL} id={this.props.user._id} location={this.props.user.location}  name={`${this.props.user.github.firstName} ${this.props.user.github.lastName}`}/>
              {this.props.user.skillSet.length>=1 && <SkillCard skills={this.props.user.skillSet}/>}
              <nav className="nav nav-pills nav-justified">
              <Link className="nav-item nav-link active" to={`/developer/${id}/experience`} >Experience</Link>
               <Link className="nav-item nav-link active" to={`/developer/${id}/gitrepo`}>Git Repo</Link>
             <Link className="nav-item nav-link active" to={`/developer/${id}/followers`} >Followers</Link>
             <Link className="nav-item nav-link active" to={`/developer/${id}/following`} >Following</Link>
             <Link className="nav-item nav-link active" to={`/developer/${id}/starred`} >Starred_repos</Link>
              </nav>
              
                <Route path='/developer/:id/experience' exact component={ExperienceCard}/>
                <Route path='/developer/:id/gitrepo' exact component={GitRepoCard}/>
                <Route path='/developer/:id/followers' exact component={Follower}/>
                <Route path='/developer/:id/following' exact component={Following}/>
                <Route path='/developer/:id/starred' exact component={StarredRepo}/>


                 {this.props.location.pathname.split('/').length===4 &&<Link to={`/developer/${id}`}>ShowLess</Link>}
            </div>
          </div>
        </div>
      </div>
    
    }
}
let mapStateToProps=state=>{
  return{
    user:state.Developers.user
  }
}
export default connect(mapStateToProps,{GetUser})(Developer)