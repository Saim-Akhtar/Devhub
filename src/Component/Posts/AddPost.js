import React from 'react'



class AddPost extends React.Component{
    render(){
        return<>
            <h2 className='text-danger'>Posts</h2>
            <h4>{this.props.purpose}</h4>
            <form>
            <div class="form-group">
             <label for="comment">Comment:</label>
             <textarea class="form-control" rows="5" id="comment" placeholder={this.props.placeholder}></textarea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </>
    }
}
export default AddPost