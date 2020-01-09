import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import Landing from './Layout/Landing';
import { Route } from 'react-router-dom';
// import Login from './Auth/Login';
import DeveloperList from './Developer/DevelopersList ';
import './Layout/App.css'
import Developer from './Developer/Developer1';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import DashBoard from './DashBoard/DashBoard';
import EditProfile from './DashBoard/Forms/EditProfile';
import ExperienceForm from './DashBoard/Forms/ExperinceForm';
import EducationForm from './DashBoard/Forms/EducationForm';
import Search from './Search/Search';


let Wrapper =()=> {
  
  return (
    <div className='container-fluid'>
      <Navbar/>
    <div className="row">
      <div className="col" style={{paddingRight:0,paddingLeft:0}}>
      
      <Route path='/' exact component={Landing} />
      {/* <Route path='/login' component={Login}/> */}
      <Route path='/developers' component={DeveloperList}/>
      <Route path="/developer/:id" component={Developer}/>
      <Route path="/posts" component={Posts}/>
      <Route path='/post/:id'component={Post}/>
      <Route path="/dashboard" component={DashBoard}/>
      <Route path='/editprofile' component={EditProfile}/>
      <Route path='/experform' component={ExperienceForm}/>
      <Route path='/educaform' component={EducationForm}/>
      <Route path='/search/:name' component={Search}/>

      
      </div>
      {!true && <div className="bg-info col-2 chat">
        <h4>Chat</h4>
        </div>}
      
    </div>
    <Footer/>
    </div>
  );
  
}

export default Wrapper;
