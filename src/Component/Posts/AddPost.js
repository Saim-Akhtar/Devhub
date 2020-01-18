import React from 'react'
class AddPost extends React.Component{
    state={mess:''}
    onSubmit=e=>{
        e.preventDefault()
        this.props.onAdd(this.state.mess)
        this.setState({mess:''})
    }
    render(){
        return<>
            <h2 className='text-danger'>Posts</h2>
            <h4>{this.props.purpose}</h4>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
             <label htmlFor="comment">Comment:</label>
             <textarea className="form-control" rows="5" id="comment" placeholder={this.props.placeholder} onChange={e=>{this.setState({mess:e.target.value});}} value={this.state.mess}></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            </>
    }
}
export default AddPost