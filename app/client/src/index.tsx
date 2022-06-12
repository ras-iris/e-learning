import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<App/>} />

        <Route path='*' element={<Page404/>} />
      </Routes>
    </Router>

  </React.StrictMode>
);
