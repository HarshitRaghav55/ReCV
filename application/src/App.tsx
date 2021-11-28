import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Routes,Route } from 'react-router-dom';
import Home from './Content/Home'
import Information from "./Resume_Templates/Information"
import ResumeGlaFormat from "./Resume_Templates/ResumeGlaFormat"
import InternshalaResume from "./Resume_Templates/InternshalaResume"
import Resume2_Template from "./Resume_Templates2/Resume2_Template"
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
        <Route path = "/Resume2_Template" element = {<Resume2_Template/>}/>
      </Routes>
        
    </React.Fragment>
    
     
    
  );
}

export default App;
