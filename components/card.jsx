import React from 'react'

const Card = ({ title, content }) => (
  <div className='gutter'>
    <article className='card'>
      <header>
        <h3>{title}</h3>
      </header>
      <footer>
        <p>{content}</p>
      </footer>
    </article>
  </div>
)

export default Card
