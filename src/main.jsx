import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <React.StrictMode>
      <BrowserRouter scrollRestoration="auto">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </PrimeReactProvider>
);
