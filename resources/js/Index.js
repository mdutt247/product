import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
import { Router, Route } from 'react-router';
import browserHistory from './components/history';
import CreateProduct from './components/Createproduct';
import DisplayProduct from './components/DisplayProduct';
import UpdateProduct from './components/UpdateProduct';
import Master from './components/Master';


render(
    <Router history={browserHistory}>
        <Route exact path="/" component={Master} />
        <Route exact path="/add-item" component={CreateProduct} />
        <Route exact path="/display-item" component={DisplayProduct} />
        <Route exact path="/edit/:id" component={UpdateProduct} />
    </Router>,
    document.getElementById('crud-app')
);
