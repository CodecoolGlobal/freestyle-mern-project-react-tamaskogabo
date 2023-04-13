import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Layout from './pages/Layout/Layout';
import MoviesList from './pages/MoviesList';
import UpdateMovie from './pages/UpdateMovie';
import CreateMovie from './pages/CreateMovie';
import MoreData from './pages/MoreData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MoviesList />,
      },
      {
        path: '/update',
        element: <UpdateMovie />,
      },
      {
        path: '/create',
        element: <CreateMovie />,
      },
      {
        path: '/more',
        element: <MoreData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
