import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Routes,Route } from 'react-router-dom';
import Generate from './Resume_Templates/ResumeFormat1/Generate'
import Home from './Content/Home'
import Preveiw from "./Resume_Templates/InternashalaResume/Preview"
import Information from "./Resume_Templates/InternashalaResume/Information"
import ResumeFormat1 from "./Resume_Templates/ResumeFormat1/ResumeFormat1"
import InternshalaResume from "./Resume_Templates/InternashalaResume/InternshalaResume"
import Resume2_Template from "./Resume_Templates/Resume_Templates2/Resume2_Template"
import CV1 from "./CV1/CV1"
import SignUp from "./signup/SignUp"
import Auth from "./signup/useAuth"
import cv1_template from "./CV1/Cv1_template"
import Cv1_template from './CV1/Cv1_template';
const  App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path ="/Resume" element = {<Resume />} />
        <Route path = "/Information" element = {<Information />} />
        <Route path = "/ResumeFormat1" element = {<ResumeFormat1/>} />
        <Route path = "/Generate" element = {<Generate/>} />
        <Route path = "/InternshalaResume" element = {<InternshalaResume name={""} email={""} mobileNumber={0} summary={""} extraCurricular={""} skill = {""} educationBachelor ={""} educationBachelor_date = {0} />} />
        <Route path = "/Resume2_Template" element = {<Resume2_Template/>}/>
        <Route path = "Preveiw" element = {<Preveiw />} />
        <Route path = "/CV1" element = {<CV1/>} />
        <Route path = "/SignUp" element = {<SignUp />} />
        <Route path = "/Cv1_template" element = {<Cv1_template />} />
      </Routes>
        
    </React.Fragment>
    
     
    
  );
}

export default App;
