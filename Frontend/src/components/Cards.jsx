import React from 'react'

function Cards({book}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white dark:border">
  <figure>
    <img
      src= {book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {book.name} </h2>
    <div className="badge badge-secondary">{book.category}</div>
    <p>{book.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">$ {book.price} </div>
      <div className= " border-gray cursor-pointer px-2 rounded-full border-[2px] hover:bg-pink-400 duration-200">Buy Now</div> 
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards