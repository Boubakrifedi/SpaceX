import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../page/home/Home"
import Flacon9 from '../page/Flacon9/Flacon9';

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/vehicles/falcon-9/' component={Flacon9} />
        <Route path='/vehicles/falcon-heavy/' component={Flacon9} />
        <Route path='/vehicles/dragon/' component={Flacon9} />
        <Route path='/vehicles/starship/' component={Flacon9} />
        <Route path='/human-spaceflight/' component={Flacon9} />
        <Route path='/rideshare/' component={Flacon9} />
        <Route path='/mission/' component={Flacon9} />
        <Route path='/launches/' component={Flacon9} />
        <Route path='/careers/' component={Flacon9} />
        <Route path='/updates/' component={Flacon9} />
      </Switch>
    </Router>
  );
}

export default Main;