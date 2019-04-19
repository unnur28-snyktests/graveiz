import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from "./redux/store";
import Provider from "react-redux/es/components/Provider";
import { setLocal } from './redux/actions/locale';

if (localStorage.alhubLang) {
  store.dispatch(setLocal(localStorage.alhubLang));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

