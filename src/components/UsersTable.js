import React from 'react'
import TableRow from './UserTableRow'

const UsersTable = ({ users }) => {
  return (
    <table>
        <tbody>
            {users.map(user => (<TableRow key={user.id} user={user} />))}
        </tbody>
    </table>
  )
}

export default UsersTable