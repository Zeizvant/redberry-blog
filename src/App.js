import { BlogListing } from 'pages/BlogListing/BlogListing';
import { MyProvider } from 'state/Context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { BlogForm } from 'pages/BlogForm/BlogForm';

const router = createBrowserRouter([
  { path: '/', element: <BlogListing /> },
  { path: '/add', element: <BlogForm /> },
]);

function App() {
  return (
    <div className='App'>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </div>
  );
}

export default App;
