import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; // wrap our app with this component to connect react with redux

import "./index.css";
import App from "./Containers/App";
import reducer from "./store/reducer";
import registerServiceWorker from "./registerServiceWorker";
import AppPosts from "./Containers/App_Posts";
import AppCounter from "./Containers/App_Counter";
// import axios from "axios";

// Sets up the defaults for ALL requests being sent
// axios.defaults.baseURL = "https://example.com"
// axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/josn"

// global, accessible to all files
// axios.interceptors.request.use(request => {
//     console.log(request);
//     return request // this is a must, if not it will be blocked
// }, error=>{
//     console.log(error);
//     return Promise.reject(error);
// });
// axios.interceptors.response.use(request => {
//     console.log(request);
//     return request // this is a must, if not it will be blocked
// }, error=>{
//     console.log(error);
//     return Promise.reject(error);
// })

const store = createStore(reducer); // creates a store with our reducer

ReactDOM.render(
  <Provider store={store}>
    <AppCounter />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
