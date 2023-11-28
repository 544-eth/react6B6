import {books} from '../page'

import Link from 'next/link'

const dramaBooks = books.filter(book => book.type == 'drama')

const bookCard = dramaBooks.map(book => (
    <section key={book.id} className="p-[5rem] shadow-2xl bg-[blue] text-green-400 rounded">
      <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p className="bg-[purple]">{book.para}</p>
        </Link>
    </section>
  ))
  
  export default function Drama() {
    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {bookCard}
      </div>
    )
  }
  
