import React from 'react'
import ListItem from './ListItem'

const Main = ({ dataArr }) => {
  return (
    <main>
        <ul>{dataArr.map(item => (<ListItem key={item.id} item={item}/>))}</ul>
    </main>
  )
}

export default Main