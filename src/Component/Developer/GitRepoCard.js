import React from 'react'
import {getReposits} from '../../Action'
import { connect } from 'react-redux'
class GitRepoCard extends React.Component{
    componentDidMount(){
      this.props.getReposits(this.props.match.params.id)
    }
    render()
    {   
        if(!this.props.repos)
        return<div className='text-center' style={{marginTop:10}}><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>  
        
        return<div>
        <hr />
        <h3 className="mb-4">Github Repos</h3>
       
              {this.props.repos.map(repo=><div  className="card card-body mb-2 bg-dark" key={repo.repo_name}>
              <div className='row'>
                <div className="col-md-10" >
              <h4>
                <a  className="text-info" href={repo.github_url}>
                  {repo.repo_name}
                </a>
              </h4>
            </div>
            <div className="col-md">
              <span className="badge badge-success mr-1">
                Stars:{repo.stars}
              </span>
              
            </div></div></div>
                
                )}
      </div>
    }
}
let mapStateToProps=state=>{
  return{
    repos:state.Developers.repos
  }
}

export default connect(mapStateToProps,{getReposits})(GitRepoCard)