import React from 'react'
import { connect } from 'react-redux'
import {GetUser,UpdateUser} from '../../../Action'


class EditProfile extends React.Component{
    
    componentWillMount(){
        let a=JSON.parse(localStorage.token)
        this.props.GetUser(a.username)
    }
    componentDidMount(){
        this.setState({skills:!this.props.user?"":this.props.user.skillSet.join(','),
        fbUrl:!this.props.user?"":this.props.user.facebookURL,
        twtUrl:!this.props.user?"":this.props.user.twitterURL,
        LinkUrl:!this.props.user?"":this.props.user.linkedinURL,
    })
    }
    
    
    onSubmit=(e)=>{
        e.preventDefault()
        let skills=this.state.skills.split(',')
        this.props.UpdateUser({skillSet:skills,facebookURL:this.state.fbUrl,twitterURL:this.state.twtUrl,linkedinURL:this.state.LinkUrl},this.props.user._id)
        this.setState({skills:'',fbUrl:'',twtUrl:'',LinkUrl:''})
    }
    state={skills:'',fbUrl:'',twtUrl:'',LinkUrl:''}
    render(){
        if(!this.props.user){
            return<div className='text-center'><div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div></div>
        }
        
        return<div className='container'><form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><h4>Set Your Skills</h4></label>
          <input type="text" placeholder='should be in ___ , ___ , ___ format' className="form-control" id="exampleInputEmail1" onChange={e=>{this.setState({skills:e.target.value});}} value={this.state.skills} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2"><h4>Add Your FaceBook Link</h4></label>
          <input type="text" placeholder="eg www.facebook.com" className="form-control" id="exampleInputEmail2" onChange={e=>{this.setState({fbUrl:e.target.value});}} value={this.state.fbUrl} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail3"><h4>Add Your Twitter Link</h4></label>
          <input type="text" placeholder="eg www.Twitter.com" className="form-control" id="exampleInputEmail3" onChange={e=>{this.setState({twtUrl:e.target.value});}} value={this.state.twtUrl} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail4"><h4>Add Your LinkedIn Link</h4></label>
          <input type="text" placeholder="eg www.LinkedIn.com" className="form-control" id="exampleInputEmail4" onChange={e=>{this.setState({LinkUrl:e.target.value});}} value={this.state.LinkUrl} />
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