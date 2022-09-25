import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Something from './components/Something';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Admin from './components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import './index.css';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register /> 
      },
      {
        path: '/',
        element: <RequireAuth allowedRoles={['has_role']} />,
        children: [
          {
            path: '/admin',
            element: <Admin />
          },
          {
            path: '/about',
            element: <About />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

