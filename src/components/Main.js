import React from 'react'
import ListItem from './ListItem'

const Main = ({ users }) => {
  return (
    <main>
        <ul>{users.map(item => (<ListItem key={item.id} item={item}/>))}</ul>
    </main>
  )
}

export default Main