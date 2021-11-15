import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Switch,Route } from 'react-router-dom';

const  App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route component = {Resume} path ="/Resume" exact/>
      </Switch>
        
    </React.Fragment>
    
     
    
  );
}

export default App;
