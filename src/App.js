import './App.css';
import Header from './components/Header';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <Header 
          handleClick={handleClick}
          users='users'
          posts='posts'
          comments='comments'
      />
    </div>
  );
}

export default App;
