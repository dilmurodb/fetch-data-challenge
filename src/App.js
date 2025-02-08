import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'
  const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
  const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments'

  const [users, setUsers] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(USERS_API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listUsers = await response.json()
      console.log(listUsers)
        setUsers(listUsers)
        setFetchError(null)

      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchItems()
  }, [])
    

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
      <Main 
          users={users}
      />
    </div>
  );
}

export default App;
