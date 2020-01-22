import React from 'react'
import {UpdateUser,GetUser} from '../../../Action'
import { connect } from 'react-redux'

class ExperienceForm extends React.Component{
    state={job_title:'',company:'',location:'',from_date:'',to_date:'',check:false}
    onSubmit=(e)=>{
        e.preventDefault()
        let  a=this.state
        this.props.UpdateUser({experience:[...this.props.user.experience,{...this.state}]},this.props.user._id)
        console.log(a)
        
    }
    componentDidMount(){
        let local = JSON.parse(localStorage.token)
        this.props.GetUser(local.username)    
    }
    render(){
        if(!this.props.user)
        return<div className='text-center'><div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div></div>
        return<div className='container'>
            <h2>Add your Experience</h2>
            <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><h4>Job Title</h4></label>
          <input type="text" placeholder='eg Senior Developer' value={this.state.job_title} onChange={(e)=>{this.setState({job_title:e.target.value})}} className="form-control" id="exampleInputEmail1"  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2"><h4>Company</h4></label>
          <input type="text" placeholder="eg BabuSoft" className="form-control" value={this.state.company} onChange={(e)=>{this.setState({company:e.target.value})}} id="exampleInputEmail2" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail3"><h4>Location</h4></label>
          <input type="text" placeholder="eg Safoora Valley" className="form-control" value={this.state.location} onChange={(e)=>{this.setState({location:e.target.value})}} id="exampleInputEmail3"  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail4"><h4>From Date</h4></label>
          <input type="date"  className="form-control" value={this.state.from_date} onChange={(e)=>{this.setState({from_date:e.target.value})}} id="exampleInputEmail4" />
        </div>
                <div className="form-check">
        <input className="form-check-input" type="checkbox" onChange={e=>{this.setState({check:e.target.checked})}} value={this.state.check} id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
            Current Job
        </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail5"><h4>To Date</h4></label>
          <input type="date"  className="form-control" value={this.state.to_date} onChange={(e)=>{this.setState({to_date:e.target.value})}} id="exampleInputEmail5" disabled={this.state.check?'disabled':''} />
        </div>
        <br/>
            <button  className='btn btn-danger'>Submit</button>
        </form>
        </div>
    }
}
let mapStateToProps=(state)=>{
    return{
        user:state.Developers.user
    }
}
export default connect(mapStateToProps,{GetUser,UpdateUser})(ExperienceForm)