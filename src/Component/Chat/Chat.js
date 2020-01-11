import React from 'react'
import { Link } from 'react-router-dom'
class Chat extends React.Component{
    specChat=()=>{
        return <div className="bg-dark text-white col-2 ">
        <h4>Chat1</h4>
        </div>
        }
    
    render(){
        return<>
        {true && <Link to='' className="btn btn-outline-success text-white mb-3" style={{marginTop:20}}>
        <div className="row">
          <div className="col-2 col-md-4 ">
            <img className="rounded-circle" src="https://avatars2.githubusercontent.com/u/40006578?s=460" alt="" />
          </div>
          <p>Mavia</p>
          </div>
          </Link>}
          </>
    }
}
export default Chat