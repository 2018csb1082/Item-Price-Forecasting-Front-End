import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'
import PrePage from '../PredictionPage/index';
import AddProduct from '../AddProduct/index';
import Whislist from '../Whislist/index';
import MainPage from '../MainPage/index';

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/predict" component={PrePage} />
            <Route path="/whislist" component={Whislist} />
        </Switch>
    );
}

export default index;
