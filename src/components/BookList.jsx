import React from 'react'
import Book from './Book'

const books = [
    {
        id:1,
        title:"Freakonomics",
        img :'https://m.media-amazon.com/images/I/918hM+7TOxL._AC_UY218_.jpg',
        author:'Steven D.Levitt'
    },
    {
        id:2,
        title:"The Earth Transformed",
        img :'https://m.media-amazon.com/images/I/915wX6lVFHL._AC_UY218_.jpg',
        author:'Frankopan Peter Frankopan'
    },
    {
        id:2,
        title:"Dopamine Detox",
        img :'https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY218_.jpg',
        author:'Kerry J Donovan'
    },

]
export default function BookList() {
  return (
    <section className='BookList'>
    {books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
    })}
    </section>
  )
}

