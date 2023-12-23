import { BlogListing } from 'pages/BlogListing/BlogListing';
import { MyProvider } from 'state/Context';
import './App.css';
function App() {
  return (
    <div className='App'>
      <MyProvider>
        <BlogListing />
      </MyProvider>
    </div>
  );
}

export default App;
