import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'


const Course = () => {

//  const paidBooks = list.filter((book) => book.category !== "Free")

  return (
    <>
       <div className={'max-w-screen-2xl container mx-auto md:px-20 px-4'}>
        <div className='mt-28  text-center'> 
            {/* items-center justify-center  */}
            <h1 className='text-2xl md:text-4xl'>
                We are delighted to have you <span className='text-pink-500'>here!! :) </span> 
            </h1>
            <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rem non doloribus odit error quos nam molestias veritatis amet ex! Nulla accusantium assumenda, 
            velit dicta sed laboriosam officiis aliquam architecto aspernatur.
            </p>
            <Link to="/"> 
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'> Back </button>
            </Link>
           
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          { list.map((book) => <Cards key={book.id} book={book}/>)}
        </div>
       </div>
    </>
  )
}

export default Course