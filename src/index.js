import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/globals';
import './styles/styles.css';

export const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(Axios)));

ReactDOM.render(
<Provider store={store}>
    {/* <GlobalStyle />  */}
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
