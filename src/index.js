import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/App/App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Pokemon from './pages/pokemon/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/pokemon' element={<Pokemon />}/>

            </Routes>
        </BrowserRouter>
    
  </React.StrictMode>
);
