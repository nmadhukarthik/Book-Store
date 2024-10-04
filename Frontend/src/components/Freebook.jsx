import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';



const Freebook = () => {
  const freeBooks = list.filter((book) => book.category === "Free")

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className={"max-w-screen-2xl container mx-auto md:px-20 px-4"}>
        <div>
          <h1 className='font-semibold text-xl pb-2 '> Free Offered Books </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non doloribus odit error quos nam molestias veritatis amet ex! Nulla accusantium assumenda, velit dicta sed laboriosam officiis aliquam architecto aspernatur.</p>
        </div>



        <div className={" max-w-screen-2xl container mx-auto md:px-20 px-4"}>
          <Slider {...settings}>
            {freeBooks.map((book) => (
              <Cards key={book.id} book={book}></Cards>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook