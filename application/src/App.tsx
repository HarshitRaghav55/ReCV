import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Routes,Route } from 'react-router-dom';
import Home from './Content/Home'
import Information from "./Resume_Templates/InternashalaResume/Information"
import ResumeFormat1 from "./Resume_Templates/ResumeFormat1/ResumeFormat1"
import InternshalaResume from "./Resume_Templates/InternashalaResume/InternshalaResume"
import Resume2_Template from "./Resume_Templates/Resume_Templates2/Resume2_Template"
import CV1 from "./CV1/CV1"
const  App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path ="/Resume" element = {<Resume />} />
        <Route path = "/Information" element = {<Information />} />
        <Route path = "/ResumeFormat1" element = {<ResumeFormat1/>} />
        <Route path = "/InternshalaResume" element = {<InternshalaResume name={""} email={""}/>} />
        <Route path = "/Resume2_Template" element = {<Resume2_Template/>}/>
        <Route path = "/CV1" element = {<CV1/>} />
      </Routes>
        
    </React.Fragment>
    
     
    
  );
}

export default App;
