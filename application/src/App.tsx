import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Routes,Route } from 'react-router-dom';
import Home from './Content/Home'
import Information from "./Resume_Templates/Information"
import ResumeGlaFormat from "./Resume_Templates/ResumeGlaFormat"
import InternshalaResume from "./Resume_Templates/InternshalaResume"
const  App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path ="/Resume" element = {<Resume />} />
        <Route path = "/Information" element = {<Information />} />
        <Route path = "/ResumeGlaFormat" element = {<ResumeGlaFormat/>} />
        <Route path = "/InternshalaResume" element = {<InternshalaResume name={""} email={""}/>} />
      </Routes>
        
    </React.Fragment>
    
     
    
  );
}

export default App;
