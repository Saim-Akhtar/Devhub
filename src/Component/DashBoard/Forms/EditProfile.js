import React from 'react'
import { connect } from 'react-redux'
import {GetUser,UpdateUser} from '../../../Action'
import { Link } from 'react-router-dom'

class EditProfile extends React.Component{
    
    componentDidMount(){
        let a=JSON.parse(localStorage.token)
        this.props.GetUser(a.username)
    }

    onSubmit=(e)=>{
        e.preventDefault()
        let skills=this.state.skills.split(',')
        this.props.UpdateUser({skillSet:skills},this.props.user._id)
        this.setState({skills:''})

    }
    state={skills:''}
    render(){
        if(!this.props.user){
            return<div>loading</div>
        }
        
        return<div className='container'><form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><h4>Set Your Skills</h4></label>
          <input type="text" className="form-control" id="exampleInputEmail1" onChange={e=>{this.setState({skills:e.target.value});}} value={this.state.skills} />
        </div>
            <button  className='btn btn-danger'>Submit</button>
        </form></div>
    }
}
let mapStateToProps=state=>{
    return{
        user:state.Developers.user
    }
}
export default connect(mapStateToProps,{GetUser,UpdateUser})(EditProfile)