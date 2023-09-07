// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// CSS's
import './css/main-unlogged.css';
import './css/public-nav.css';

// Page Components
import Home from './index-app';
import Support from './support-app';
import Faq from './faq-app';

const Router = createBrowserRouter([
  {path: '/', element:<Home/>},
  {path: '/soporte', element:<Support/>},
  {path: '/preguntas-frecuentes', element:<Faq/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  </React.StrictMode>
);