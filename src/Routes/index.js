import Home from "../Component/Home"
// import Location from "./components/Location";
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Switch, BrowserRouter } from "react-router-dom";
// import {BrowserRouter,Route} from 'react-router-dom';

function Routes() {
  
  return (
    <div>
      <Router history={ browserHistory }>
      <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/location" component={Location} /> */}
        </Switch>
      </Router>
    </div>
  );
}
export default Routes;
