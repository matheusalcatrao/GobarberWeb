import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Router.js";

import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/register" component={SignUp} />

            <Route path="/profile" component={Profile} isPrivate />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
