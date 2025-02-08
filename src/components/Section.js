import React from 'react'

const Section = ({ handleClick, title}) => {
  return (
    <section onClick={(e) => handleClick(e.target.innerText)}>{title}</section>
  )
}

export default Section