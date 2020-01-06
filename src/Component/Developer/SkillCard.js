import React from 'react'

class SkillCard extends React.Component{
    render(){
        return<div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <h3 className="text-center text-dark">John's Bio</h3>
            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel,
              officia facere porro esse numquam assumenda doloremque saepe aliquam nemo excepturi aliquid maiores! Excepturi,
              libero repudiandae.
            </p>
            <hr />
            <h3 className="text-center text-dark">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="p-3">
                  <i className="fa fa-check"></i> HTML</div>
                <div className="p-3">
                  <i className="fa fa-check"></i> CSS</div>
                <div className="p-3">
                  <i className="fa fa-check"></i> JavaScript</div>
                <div className="p-3">
                  <i className="fa fa-check"></i> Python</div>
                <div className="p-3">
                  <i className="fa fa-check"></i> C#</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}
export default SkillCard