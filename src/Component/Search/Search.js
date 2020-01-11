import React from 'react'
import { onSearch } from '../../Action'
import {Link,Route} from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileCard from '../Developer/ProfileCard'
import GitRepoCard from '../Developer/GitRepoCard'
import Follower from '../Developer/Follower'
import Following from '../Developer/Following'


class Search extends React.Component{
    
    render(){
        if(!this.props.user)
        return<div>Search somthing</div>
        let {login,avatar_url,location}=this.props.user
        return<div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <Link to='/' className="btn btn-light mb-3 float-left">Back To Home</Link>
                </div>
              </div>
              <ProfileCard location={location} avatar_url={avatar_url} login={login}/>
              <nav className="nav nav-pills nav-justified">
    <Link className="nav-item nav-link active" to={`/search/${login}/gitrepo`}>Git Repo <span>({this.props.user.public_repos})</span></Link>
    <Link className="nav-item nav-link active" to={`/search/${login}/followers`}>Followers <span>({this.props.user.followers})</span></Link>
    <Link className="nav-item nav-link active" to={`/search/${login}/following`} >Following <span>({this.props.user.following})</span></Link>
             </nav>
                 <Route path='/search/:name/gitrepo' exact render={()=>{return<GitRepoCard name={login}/>}}/>
                <Route path='/search/:name/followers' exact render={()=>{return<Follower name={login}/>}}/>
                <Route path='/search/:name/following' exact render={()=>{return<Following name={login}/>}}/>
                {this.props.location.pathname.split('/').length===4 &&<Link to={`/search/${login}`}>ShowLess</Link>}
              </div>
              </div>
              </div>
              </div>
    }
}
let mapStateToProps=state=>{
    return{
        user:state.GitUserProfile.user
    }
}
export default connect(mapStateToProps,{onSearch})(Search)