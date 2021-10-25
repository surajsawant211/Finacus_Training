import React from 'react';
import { Route,Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Menu from './Menu';
import Service from './Service';
import User from './User';

function App() {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route  exact path='/' component={About} />
        <Route  exact path='/service' component={Service} />
        <Route  exact path='/user/:fname' component={User} />
        <Route  path='/contact' component={Contact}  />
      </Switch>
        {/* <About />
        <Contact /> */}
    </>
  );
}

export default App;
