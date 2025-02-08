import React from 'react'
import UsersTable from './UsersTable'
import PostsTable from './PostsTable'
import CommentsTable from './CommentsTable'

const Table = ({ users, posts, comments, usersClicked, postsClicked, commentsClicked }) => {
  return (
    <>
        {usersClicked ? (<UsersTable
            users={users}
        />) : null}
        {postsClicked ? (<PostsTable
            posts={posts}
        />) : null}
        {commentsClicked ? (<CommentsTable
            comments={comments}
        />) : null}
    </>
  )
}

export default Table