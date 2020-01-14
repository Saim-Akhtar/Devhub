import React from 'react'
import {GetFollowers, GetUser} from '../../Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Follower extends React.Component{
    componentDidMount(){
        this.props.GetFollowers(this.props.match.params.id)
    }
  render(){
      if(!this.props.followers)
      return<div className='text-center' style={{marginTop:10}}><div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
      </div></div>
      return<div className='container'>
          <div className="row">
        <div className="col-md-12">
            {this.props.followers.map(follower=>{
                return<div className="card card-body bg-dark text-white mb-3" style={{marginTop:20}} key={follower.user_name}>
                <div className="row">
                  <div className="col-1 col-md-1 ">
                    <img className="rounded-circle" src={follower.img} alt="" />
                  </div>
            <Link className='col-6' to={`/search/${follower.user_name}`} onClick={()=>{this.props.GetUser(follower.user_name)}}>{follower.user_name}</Link>
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
     followers:state.Developers.followers
    }
  }
export default connect(mapStateToProps,{GetUser,GetFollowers})(Follower)