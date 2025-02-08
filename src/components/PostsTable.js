import React from 'react'
import PostTableRow from './PostTableRow'

const PostsTable = ({ posts }) => {
  return (
    <table>
        <tbody>
            {posts.map(post => (<PostTableRow key={post.id} post={post} />))}
        </tbody>
    </table>
  )
}

export default PostsTable