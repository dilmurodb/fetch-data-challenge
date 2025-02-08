import React from 'react'

const PostTableRow = ({post}) => {

    // const stringifiedAddress = JSON.stringify(user.address)
    // const stringifiedCompany = JSON.stringify(user.company)

  return (
    <tr>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <th>{post.title}</th>
        <td>{post.body}</td>
    </tr>
  )
}

export default PostTableRow