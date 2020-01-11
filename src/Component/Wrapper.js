import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import Landing from './Layout/Landing';
import { Route } from 'react-router-dom';
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
import { connect } from 'react-redux';
import Chat from './Chat/Chat';


class Wrapper extends React.Component{
  
  render(){
  return (
    <div className='container-fluid'>
      <Navbar/>
    <div className="row">
      <div className="col" style={{paddingRight:0,paddingLeft:0}}>
      {localStorage.token &&<Route path='/' exact component={DashBoard}></Route>}
      {!localStorage.token && <Route path='/' exact component={Landing} />}
      <Route path='/developers' component={DeveloperList}/>
      <Route path="/developer/:id" component={Developer}/>
      {localStorage.token && <Route path="/posts" component={Posts}/>}
      <Route path='/post/:id'component={Post}/>
      {/* <Route path="/dashboard" component={DashBoard}/> */}
      <Route path='/editprofile' component={EditProfile}/>
      <Route path='/experform' component={ExperienceForm}/>
      <Route path='/educaform' component={EducationForm}/>
      <Route path='/search/:name' component={Search}/>

      
      </div>
      {this.props.chatNav && <div className="bg-dark text-white col-2 chat">
        <h4>Chat</h4>
        <Chat/>
        </div>}
      
    </div>
    <Footer/>
    </div>
  );
  }
  
}
let mapStateToProps=(state)=>{
  return{
    auth:state.Auth,
    chatNav:state.ChatNav
  }
}

export default connect(mapStateToProps)(Wrapper);
