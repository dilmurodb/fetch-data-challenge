import React from 'react'

const CommentTableRow = ({comment}) => {
  return (
    <tr>
        <td>{comment.postId}</td>
        <td>{comment.id}</td>
        <th>{comment.name}</th>
        <td>{comment.email}</td>
        <td>{comment.body}</td>
    </tr>
  )
}

export default CommentTableRow