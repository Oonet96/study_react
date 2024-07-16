import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

// function App = ()=>{
//   const divStyle = {
//     border: '1px solid blue'
//   }
//   return (
//     // <></> - fragment
//     <div style = {divStyle}> 
//       <p>안녕하세요</p>
//       <p>반갑습니다.</p>
//     <div/>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    {/* ColoredMessage */}
  </>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
