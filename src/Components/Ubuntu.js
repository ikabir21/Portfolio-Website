import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppScreen from './Apps/AppScreen';
import Desktop from './Desktop/Desktop'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar';

const Ubuntu = ({ bgImg }) => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" component={() => Desktop(bgImg)} exact />
        <Route path="/apps" component={() => AppScreen(bgImg)} exact />
      </Switch>
    </Router>
  )
}

export default Ubuntu
