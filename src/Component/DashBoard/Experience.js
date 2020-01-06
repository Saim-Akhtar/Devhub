import React from 'react'

class Experince extends React.Component{
    render(){
        return<>
        <h2>Experince Credentials</h2>
        <table className="table">
            
        <thead>
          <tr>
            
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>BabuSoft</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button className='btn btn-danger'><i className='fa fa-trash pr-1'></i>Delete</button></td>
          </tr>
          
        </tbody>
      </table></>
    }
}
export default Experince