import { BlogPage } from 'pages/BlogPage/BlogPage';

const { BlogForm } = require('pages/BlogForm/BlogForm');
const { BlogListing } = require('pages/BlogListing/BlogListing');
const {
  createHashRouter,
  createBrowserRouter,
  Navigate,
} = require('react-router-dom');

export const router = createHashRouter([
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
