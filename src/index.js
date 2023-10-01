import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import Counter from './Counter';
// import HelloAsClass from './HelloAsClass';
// import HelloASFunction from './HelloAsFunction';
import Menu from './MenuContainer';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter/> */}
    {/* <App/> */}
    {/* <HelloAsClass who="Nam" address="Da Nang"/>
    <br/><HelloASFunction a="5" b="10"/> */}
    <Menu/>


  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
