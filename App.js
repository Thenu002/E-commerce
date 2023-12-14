/**import Propsclass1 from "./day4/Propsclass1"
import Propsfunction from "./day4/Propsfunction"
import WithoutProps1 from "./day4/WithoutProps1"
import ArrowProps from "./day4/ArrowProps"
import StateClass from "./day4/StateClass"
import StateFunction from "./day4/StateFunction"
import StateHoldObject from "./day4/StateHoldObject"
export default function App(){
  return(
    <div>
      <Propsfunction name="Selva"/>
      <Propsclass1 college="SKCT"/>
      <WithoutProps1 college1="SKCT" name1="Selva"/>
      <ArrowProps insta="SelvaCutie_Offl"/>
      <StateClass/>
      <StateFunction/>
      <StateHoldObject/>
    </div>
  )
}

import LoginPage from './day4/LoginPage';

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
// App.js

import SignupForm from "./day4/SignupForm";

function App() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default App;

/**import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <ul>
    <li>
    <link to="/LoginPage"></link>
    
    </li>
    </ul>
    
    <Routes>
    <Route path="/LoginPage" element=<LoginPage/> ></Route>
    <Route path="/FignupForm" element=<SignupForm/> ></Route>
    
    
    </Routes>         
    
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;
  
  import {BrowserRouter,Routes,Route,Router } from "react-router-dom"
  import L
  export default function App()
  {
    
    
    return(
      <div>
      <BrowserRouter>
      <ul>
      <li>
      <link to="/LoginPage">LoginPage</link>
      </li>
      </ul>
      <Routes>
      <Route path="/LoginPage" element=<Login/>></Route>
      <Route path="/FignupForm" element=<SignupForm/>></Route>
      </Routes>
      </BrowserRouter>
      </div>
      )
    }**/
 

    /*
    
    function App() {
      return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/signup" element={<SignupForm1 />} /> 
        
        </Routes>
        </BrowserRouter>
        
        );
      }
      
      export default App;
      */
  /*   import React from 'react';
     import { BrowserRouter, Routes, Route} from 'react-router-dom';
   import LoginPage1 from './Components/Login-Signup/LoginPage1';
   import SignupForm1 from './Components/Login-Signup/SignupForm1';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/" element={<SignupForm1 />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;*/

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react'
import Login from './Components/e-commerce/Login';
import Signin from './Components/e-commerce/Signin';

 class App extends Component {
  render() {
    return (  
      <BrowserRouter>
      <Routes>
        <Route path="/Signin" element={<Signin/ >} />
        <Route path="/" element={<Login/ >} />
        </Routes></BrowserRouter>
    )
  }
}
export default App;