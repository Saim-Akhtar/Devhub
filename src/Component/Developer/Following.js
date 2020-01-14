import React from 'react'
import {GetFollowing, GetUser} from '../../Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Following extends React.Component{
    componentDidMount(){
        this.props.GetFollowing(this.props.match.params.id)
    }
  render(){
      if(!this.props.following)
      return<div className='text-center' style={{marginTop:10}}><div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
      </div></div>
      return<div className='container'>
          <div className="row">
        <div className="col-md-12">
            {this.props.following.map(following=>{
                return<div className="card card-body bg-dark text-white mb-3" style={{marginTop:20}} key={following.user_name}>
                <div className="row">
                  <div className="col-1 col-md-1 ">
                    <img className="rounded-circle" src={following.img} alt="" />
                  </div>
            <Link className='col-6' to={`/search/${following.user_name}`} onClick={()=>{this.props.GetUser(following.user_name)}}>{following.user_name}</Link>
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
     following:state.Developers.following
    }
  }
export default connect(mapStateToProps,{GetUser,GetFollowing})(Following)