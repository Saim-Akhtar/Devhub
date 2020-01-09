import React from 'react'
import {Link} from 'react-router-dom'
import {getReposits} from '../../Action'
import { connect } from 'react-redux'
class GitRepoCard extends React.Component{
    componentDidMount(){
      this.props.getReposits(this.props.name)
    }
    render()
    {
        if(!this.props.repos)
        return<div>Loading</div>
        return<div>
        <hr />
        <h3 className="mb-4">Github Repos</h3>
        <div  className="card card-body mb-2 ">
          <div className="row ">
            {this.props.repos.map(repo=>{
              return<><div className="col-md-6" key={repo}>
              <h4>
                <Link  className="text-info" to=''> {repo}
                </Link>
              </h4>
              <p>Repository description</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars: 44
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: 21
              </span>
              <span className="badge badge-success">
                Forks: 122
              </span>
            </div></>
            })}
            
          </div>
        </div>
      </div>
    }
}
let mapStateToProps=state=>{
  return {
    repos:state.GitUserProfile.repos
  }
}
export default connect(mapStateToProps,{getReposits})(GitRepoCard)