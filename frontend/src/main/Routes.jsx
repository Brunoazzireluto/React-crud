import React from "react";
import { Switch, Route, Redirect} from "react-router";

import Home from "../components/Home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/users' component={UserCrud}></Route>
        <Redirect from='*' to='/' ></Redirect>
    </Switch>