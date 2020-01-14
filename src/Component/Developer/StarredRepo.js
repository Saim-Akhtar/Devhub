import React from 'react'
import { GetStarredRepos,GetUser} from '../../Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Follower extends React.Component{
    componentDidMount(){
        this.props.GetStarredRepos(this.props.match.params.id)
    }
  render(){
    
      if(!this.props.starred_repos)
      return<div className='text-center' style={{marginTop:10}}><div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
      </div></div>
      return<div className='container'>
          <div className="row">
        <div className="col-md-12">
            {this.props.starred_repos.map(starred_repo=>{
                return<div className="card card-body bg-dark text-white mb-3" style={{marginTop:20}} key={starred_repo.repo_name}>
                <div className="row">
                  
            <Link className='col-6' to={`/search/${starred_repo.repo_owner.user_name}`} onClick={()=>{this.props.GetUser(starred_repo.repo_owner.user_name)}}>{starred_repo.repo_owner.user_name}</Link>
            {/* <div className='col-6'>{starred_repo.repo_owner}</div> */}
            <div className='col-12'>{starred_repo.repo_name}</div>
                </div>
                </div>
            })}
            </div>
            </div>
      </div>
  }
}
let mapStateToProps=state=>{
    return {
    starred_repos:state.Developers.starred_repos
    }
  }
export default connect(mapStateToProps,{GetStarredRepos,GetUser})(Follower)