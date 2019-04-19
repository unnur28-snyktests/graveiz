import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import NotFound from './NotFound/NotFound';

export default () => (
  <Fragment>
    <Switch>
      <Route path="/products" component={Products} />
      <Route path="/categories" component={Categories} />
      <Route exact path="/" component={MainPage} />
      <Route path="*" component={NotFound}/>
    </Switch>
  </Fragment>
);
