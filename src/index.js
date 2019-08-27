import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./redux/store";
import Provider from "react-redux/es/components/Provider";
import { setLocal } from './redux/actions/locale';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout";
import Routing from "./components/Routing";
import TranslateProvider from "./provider/Translate";

if (localStorage.alhubLang) {
  store.dispatch(setLocal(localStorage.alhubLang));
}

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <TranslateProvider>
          <BrowserRouter>
            <Layout>
            <Routing />
            </Layout>
          </BrowserRouter>
      </TranslateProvider>
    </ThemeProvider>
  </Provider>


  , document.getElementById('root'));

