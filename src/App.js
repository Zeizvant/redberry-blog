import { MyProvider } from 'state/Context';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from 'routes/root';

function App() {
  return (
    <div className='App'>
      <MyProvider>
        <RouterProvider
          basename='/redberry-blog'
          router={router}
          forceRefresh={true}
        />
      </MyProvider>
    </div>
  );
}

export default App;
