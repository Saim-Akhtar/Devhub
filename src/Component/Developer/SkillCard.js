import React from 'react'

class SkillCard extends React.Component{
    render(){
        return<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            
            <h3 className="text-center text-dark">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {
                  this.props.skills.map(skill=>{
                      return <div className="p-3">
                  <i className="fa fa-check"></i> {skill}</div>
                  })
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}
export default SkillCard