import React from 'react'
import CommentTableRow from '../CommentTableRow'

const CommentsTable = ({comments}) => {
  return (
    <table>
        <tbody>
            {comments.map(comment => (<CommentTableRow key={comment.id} comment={comment} />))}
        </tbody>
    </table>
  )
}

export default CommentsTable