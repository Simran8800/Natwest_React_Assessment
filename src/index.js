import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Searchbar from './Searchbar1/Searchbar'
// import Todo from './Todolist1/Todo';
// import Table from './Table1/Table'
// import App from './App';
// import Main from './Component/Main';
import Likebtn from './Likedislike/Likebtn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}

    {/* <Likebtn /> */}
    {/* <Table/> */}
    {/* <Todo/> */}
    <Searchbar/>
    

    {/* <App /> */}
    
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
