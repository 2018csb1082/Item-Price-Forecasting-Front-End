import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PrePage from '../PredictionPage/PrePage';
import Login from "../LogIn/Login";
import Signup from "../SignUp/SignUp"
import MainPage from '../MainPage/index';

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
        </Switch>
    );
}

export default index;
