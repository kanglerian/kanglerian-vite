import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path: "/blog",
    element: <Blog/>,
  },{
    path: "/article",
    element: <Article/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
