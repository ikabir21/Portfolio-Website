import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppScreen from './Apps/AppScreen';
import Desktop from './Desktop/Desktop'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar';

const Ubuntu = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route to="/" exact component={Desktop} />
        <Route to="/apps" exact component={AppScreen} />
      </Switch>
    </Router>
  )
}

export default Ubuntu
