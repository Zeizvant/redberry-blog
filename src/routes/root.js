import { BlogPage } from 'pages/BlogPage/BlogPage';
import { useContext } from 'react';
import { Context } from 'state/Context';

const { BlogForm } = require('pages/BlogForm/BlogForm');
const { BlogListing } = require('pages/BlogListing/BlogListing');
const { createBrowserRouter, Navigate } = require('react-router-dom');

export const router = createBrowserRouter([
  { path: '/', element: <BlogListing /> },
  {
    path: '/add',
    element: <BlogForm />,
  },
  {
    path: '/blogs/:id',
    element: <BlogPage />,
  },
  { path: '*', element: <Navigate to='/' /> },
]);
