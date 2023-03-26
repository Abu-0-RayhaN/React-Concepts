import React from 'react'

export default function Book({img, title, author}) {
  return (
    <div className='book'>
      <img src={img} alt="Book Pic" className='rounded rounder-circle' />
        <h3>{title}</h3>
        <h5>{author}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis!</p>
    </div>
  )
}
