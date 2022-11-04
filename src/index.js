import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={ <App/> } />
    <Route exact path='/resume' element={ <Resume/> } />  
   </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
