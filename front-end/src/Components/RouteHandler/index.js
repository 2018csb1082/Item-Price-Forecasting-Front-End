import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'
import PrePage from '../PredictionPage/index';
import AddProduct from '../AddProduct/index';
import Whislist from '../Whislist/index';
<<<<<<< HEAD
import Login from "../LogIn/Login";
import Signup from "../SignUp/SignUp"
=======
import MainPage from '../MainPage/index';
>>>>>>> cee07e693bf11b6845651a13162c15f965beae3b

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/predict" component={PrePage} />
            <Route path="/whislist" component={Whislist} />
            <Route path="/Login" component={Login}/>
            <Route path="/Signup" component={Signup}/>

        </Switch>
    );
}

export default index;
