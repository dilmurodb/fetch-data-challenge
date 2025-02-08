import React from 'react'

const Header = ({ handleClick, users, posts, comments, usersClicked, postsClicked, commentsClicked }) => {
  return (
    <header>
        {usersClicked ? (<section style={{backgroundColor: 'black', color: 'white'}} onClick={(e) => handleClick(e.target.innerText)}>{users}</section>) : (<section style={{backgroundColor: 'grey', color: 'black'}} onClick={(e) => handleClick(e.target.innerText)}>{users}</section>)}
        {postsClicked ? (<section style={{backgroundColor: 'black', color: 'white'}} onClick={(e) => handleClick(e.target.innerText)}>{posts}</section>) : (<section style={{backgroundColor: 'grey', color: 'black'}} onClick={(e) => handleClick(e.target.innerText)}>{posts}</section>)}
        {commentsClicked ? (<section style={{backgroundColor: 'black', color: 'white'}} onClick={(e) => handleClick(e.target.innerText)}>{comments}</section>) : (<section style={{backgroundColor: 'grey', color: 'black'}} onClick={(e) => handleClick(e.target.innerText)}>{comments}</section>)}
    </header>
  )
}

export default Header