import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import User from "layouts/User.jsx";
import Public  from "layouts/Public.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/user" component={User} />
      <Route path="/admin" component={Admin} />
      <Route path="/public" component={Public} />
      <Redirect from="/" to="/public/404.html" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
