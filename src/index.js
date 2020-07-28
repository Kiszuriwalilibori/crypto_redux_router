import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./js/REDUCERS/reducer";
import Axios from "axios";
import App from "./components/App";
import * as serviceWorker from "./js/serviceWorker";
import "./styles/styles.css";

export const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(Axios))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
