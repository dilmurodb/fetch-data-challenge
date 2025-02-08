import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'
  const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
  const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments'

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [usersClicked, setUsersClicked] = useState(true)
  const [postsClicked, setPostsClicked] = useState(false)
  const [commentsClicked, setCommentsClicked] = useState(false)



  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responseUsers = await fetch(USERS_API_URL)
        const responsePosts = await fetch(POSTS_API_URL)
        const responseComments = await fetch(COMMENTS_API_URL)
        if (!responseUsers.ok) throw Error('Did not receive expected data')
        if (!responsePosts.ok) throw Error('Did not receive expected data')
        if (!responseComments.ok) throw Error('Did not receive expected data')
        const listUsers = await responseUsers.json()
        const listPosts = await responsePosts.json()
        const listComments = await responseComments.json()
        setUsers(listUsers)
        setPosts(listPosts)
        setComments(listComments)
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
    if (e === 'users') {
      setUsersClicked(true)
      setPostsClicked(false)
      setCommentsClicked(false)
    } else if (e === 'posts') {
      setPostsClicked(true)
      setUsersClicked(false)
      setCommentsClicked(false)
    } else if (e === 'comments') {
      setCommentsClicked(true)
      setPostsClicked(false)
      setUsersClicked(false)
    }
  }

  return (
    <div className="App">
      <Header 
          handleClick={handleClick}
          users='users'
          posts='posts'
          comments='comments'
          usersClicked={usersClicked}
          postsClicked={postsClicked}
          commentsClicked={commentsClicked}
      />
      <main>
        {isLoading ? (<h2 style={{color: 'green'}}>The App is loading...</h2>) : null}
        {fetchError ? (<h3 style={{color: 'red'}}>{fetchError}</h3>) : null}
        {!isLoading && !fetchError && (<Main 
            users={users}
            posts={posts}
            comments={comments}
            usersClicked={usersClicked}
            postsClicked={postsClicked}
            commentsClicked={commentsClicked}
        />)}
      </main>
    </div>
  );
}

export default App;
