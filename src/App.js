// import React, { Fragment } from "react";
// import Events from './components/Events';
// import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import './App.css';
// import { AuthProvider } from './components/auth/Auth';
// import Login from "./components/auth/Login";
// import Welcome from './Welcome';
import Footer from "./components/footer/Footer"
// import getNextEvents from './components/pages/contactPage';

// import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import aboutPage from './components/pages/aboutPage';
import EventPage from './components/pages/eventPage';
import contactPage from './components/pages/contactPage';
// import Navbar from './components/layout/Navbar'
// // import Dashboard from './components/dashboard/Dashboard';
// import React, { Component } from 'react';
// import EventDetail from './components/event/EventDetail';
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
// import CreateEvent from './components/event/CreateEvent'
// import React, { useContext } from "react";
// import { Router } from "@reach/router";

import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
// import Application from "./components/auth/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/auth/profilePage";

// import getNextEvents from './components/pages/contactPage';
// import { UserContext } from "./providers/UserProvider";

const App = () => {
    return (
      <div>
        {/* This is disable for now */}
        {/* <AuthProvider>
          <Welcome />
          <Login />
       </AuthProvider>  */}
        {/* <UserProvider>
          <Application />
        </UserProvider> */}
          
        <Router>

          <UserProvider>

            <Navbar />

                <Switch>
                  {/* <Route path='/' exact component={Home} /> */}
                    <Route path='/' exact component={aboutPage} />
                    <Route path='/EventPage' component={EventPage} />
                    <Route path='/contactPage' component={contactPage}/>                   {/* <Route path='/Application' component={Application} /> */}
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/SignIn' component={SignIn} />
                    <Route path='/profilePage' component={ProfilePage} />
                </Switch>
            </UserProvider> 
              
        </Router>

        <Footer/>
        {/* <getNextEvents /> */}
      </div>
  
  );
}
export default App;