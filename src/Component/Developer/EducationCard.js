import React from 'react'


class EducationCard extends React.Component{
    render(){
        return<div class="col">
        <h3 class="text-center text-info">Education</h3>
        <ul class="list-group ">
          <li class="list-group-item bg-dark text-info">
            <h4>Univeresity Of Washington</h4>
            <p>Sep 1993 - June 1999</p>
            <p>
              <strong>Degree: </strong>Masters</p>
            <p>
              <strong>Field Of Study: </strong>Computer Science</p>
            
              <p>
                <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta
                enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
          </li>
        </ul>
      </div>
    }
}
export default EducationCard