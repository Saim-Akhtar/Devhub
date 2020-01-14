import React from 'react'
import { GetUser } from '../../Action'
import {Link,Route} from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileCard from '../Developer/ProfileCard'
import GitRepoCard from '../Developer/GitRepoCard'
import Follower from '../Developer/Follower'
import Following from '../Developer/Following'
import StarredRepo from '../Developer/StarredRepo'


class Search extends React.Component{
    
    render(){
        let {id}=this.props.match.params.id
        if(!this.props.user)
        return<div className='text-center' style={{marginTop:10}}><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>
        return<div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <Link to='/' className="btn btn-light mb-3 float-left">Back To Home</Link>
                </div>
              </div>
              {this.props.user.github && <ProfileCard profilePic={this.props.user.profilePic} location={this.props.user.location} name={`${this.props.user.github.firstName}${this.props.user.github.lastName}`}/>}
              {!this.props.user.github && <ProfileCard profilePic={this.props.user.avatar_url} name={this.props.user.login} location={this.props.user.location} />}
              <nav className="nav nav-pills nav-justified">
    <Link className="nav-item nav-link active" to={`/search/${this.props.match.params.id}/gitrepo`}>Git Repo <span>({this.props.user.public_repos})</span></Link>
    <Link className="nav-item nav-link active" to={`/search/${this.props.match.params.id}/followers`}>Followers <span>({this.props.user.followers})</span></Link>
    <Link className="nav-item nav-link active" to={`/search/${this.props.match.params.id}/following`} >Following <span>({this.props.user.following})</span></Link>
    <Link className="nav-item nav-link active" to={`/search/${this.props.match.params.id}/starred_repos`} >Starred Repo </Link>

             </nav>
                 <Route path='/search/:id/gitrepo' exact component={GitRepoCard} /> 
                <Route path='/search/:id/followers' exact component={Follower} /> 
                <Route path='/search/:id/following' exact component={Following} /> 
                <Route path='/search/:id/starred_repos' exact component={StarredRepo} /> 
                {this.props.location.pathname.split('/').length===4 &&<Link to={`/search/${id}`}>ShowLess</Link>}
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
export default connect(mapStateToProps,{GetUser})(Search)