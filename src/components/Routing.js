import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import NotFound from './NotFound/NotFound';
import Location from './Location/Location';

export default class Routing extends Component {
  render() {
    return (
        <Switch>
          <Route path="/location" component={Location} />
          <Route path="/products" component={Products} />
          <Route path="/categories" component={Categories} />
          <Route exact path="/" component={MainPage} />
          <Route path="*" component={NotFound}/>
        </Switch>
    );
  }
}
