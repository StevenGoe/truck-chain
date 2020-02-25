import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Function for retrieving json format for orders table
// async function handleLoad() {
//   const res = await fetch(`/api/order/QuaryForOwner`, {
//     method: "GET"
//   });
//   const result = await res.json();

//   console.log(result);
// }

// handleLoad();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
