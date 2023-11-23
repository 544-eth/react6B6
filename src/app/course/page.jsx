const books = [
  {
    id: '001',
    title: 'atomic habits',
    author: 'james cameron'
  },
  {
    id: '002',
    title: 'atomic habits',
    author: 'james cameron'
  },
  {
    id: '003',
    title: 'atomic habits',
    author: 'james cameron'
  },
  {
    id: '004',
    title: 'atomic habits',
    author: 'james cameron'
  },
  {
    id: '005',
    title: 'atomic habits',
    author: 'james cameron'
  },
  {
    id: '006',
    title: 'atomic habits',
    author: 'james cameron'
  },
]

const bookCard = books.map(book => (
  <section key={book.id} className="p-[5rem] shadow-2xl bg-[] text-orange-400" >
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))

export default function Course() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
      {bookCard}
    </div>
  )
}
