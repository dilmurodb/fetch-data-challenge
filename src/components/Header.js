import React from 'react'
import Section from './Section'

const Header = ({ handleClick, users, posts, comments }) => {
  return (
    <header>
        <Section 
            title={users}
            handleClick={handleClick} 
        />
        <Section 
            title={posts}
            handleClick={handleClick} 
        />
        <Section 
            title={comments}
            handleClick={handleClick} 
        />
    </header>
  )
}

export default Header