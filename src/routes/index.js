import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import User from "../pages/User";
import UserRepos from "../pages/UserRepos";
import UserFollow from "../pages/UserFollow";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/user" component={User} />
      <Route exact path="/user/repos" component={UserRepos} />
      <Route exact path="/user/followers" component={UserFollow} />
      <Route exact path="/user/following" component={UserFollow} />
    </Switch>
  );
}
