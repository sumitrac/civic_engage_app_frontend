// import React, { Fragment } from "react";
// import Events from './components/Events';
// import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
// import { AuthProvider } from './components/auth/Auth';
// import Login from "./components/auth/Login";
// import Welcome from './Welcome';
// import Footer from "./components/footer/Footer"


// import React from 'react';
import './App.css';
// import Navbar from './components/navbar/navBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import About from './components/pages/About';
// import EventPage from './components/pages/EventPage';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import React, { Component } from 'react';
import ProjectDetail from './components/event/EventDetail';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateEvent from './components/event/CreateEvent'


class App extends Component {
  render () {
  // return (
  //   <Fragment>
  //     {<Meeting/>}
  //   </Fragment>
  // )}  
  // const [user, setUser] = useState()
  // const [eventList, setEventList] = useState();
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            {/* <Route path='/aboutpage' component{AboutPage} /> */}
            <Route exact path='/' component={ Dashboard } />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createevent' component={CreateEvent} />
          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}
  //   <div>
  //     <AuthProvider>
  //       <Welcome />
  //       <Login />
  //     </AuthProvider>
      
  //     <Router>
  //       <Navbar />
  //       {/* <Switch> */}
  //         {/* <Route path='/' exact component={Home} /> */}
  //         <Route path='/' component={About} />
  //         <Route path='/EventPage' component={EventPage} />
  //         {/* <Route path='/about' component={About} /> */}
  //       {/* </Switch> */}
  //     </Router>
    
  //     {/* <AuthProvider>
  //       <Welcome />
  //       <Login />
  //     </AuthProvider> */}
  //     <Footer/>
  //   </div>

  // );}

export default App;