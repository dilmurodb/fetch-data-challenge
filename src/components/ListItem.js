import React from 'react'

const ListItem = ({ item }) => {
    const stringifiedItem = JSON.stringify(item)
  return (
    <li>{stringifiedItem }</li>
  )
}

export default ListItem