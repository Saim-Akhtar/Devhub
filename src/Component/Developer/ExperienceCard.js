import React from 'react'

class ExperienceCard extends React.Component{
    render(){
        return<div className="col">
        <h3 className="text-center text-info">Experience</h3>
        <ul className="list-group">
          <li className="list-group-item bg-dark text-info">
            <h4>Microsoft</h4>
            <p>Oct 2011 - Current</p>
            <p>
              <strong>Position:</strong> Senior Developer
            </p>
            <p>
              <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta enim
              excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
          </li>
         
        </ul>
      </div>
    }
}
export default ExperienceCard