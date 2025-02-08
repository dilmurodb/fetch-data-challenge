import React from 'react'
import ListItem from './ListItem'

const Main = ({ users, posts, comments, usersClicked, postsClicked, commentsClicked }) => {
  return (
    <>
        {usersClicked ? (<ul>{users.map(item => (<ListItem key={item.id} item={item}/>))}</ul>) : null}
        {postsClicked ? (<ul>{posts.map(item => (<ListItem key={item.id} item={item}/>))}</ul>) : null}
        {commentsClicked ? (<ul>{comments.map(item => (<ListItem key={item.id} item={item}/>))}</ul>) : null}
    </>
  )
}

export default Main