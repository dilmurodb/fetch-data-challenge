import React from 'react'

const UserTableRow = ({user}) => {

    const stringifiedAddress = JSON.stringify(user.address)
    const stringifiedCompany = JSON.stringify(user.company)

  return (
    <tr>
        <td>{user.id}</td>
        <th>{user.name}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{stringifiedAddress}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>{stringifiedCompany}</td>
    </tr>
  )
}

export default UserTableRow