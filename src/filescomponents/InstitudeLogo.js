import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstitudeLogo = () => {
   
    const images = [
        "/student3.jpg",
        "/student2.jpg",
        "/student3.jpg",
        "/student2.jpg",
        "/student5.jpg",
        "/student3.jpg",
        "/student2.jpg",
        "/student2.jpg",
        "/student5.jpg",
        "/student2.jpg",
        "/student2.jpg",
       
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 3,
      };


  return (
    <div className='bg-gray-400'>
        <div>
            <div>
            <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='p-2 flex gap-3'>
            <img src={image} alt={`Carousel ${index}`} className='w-[100px] rounded-full'/>
          </div>
        ))}
      </Slider>
    </div>
            </div>
        </div>
    </div>
  )
}

export default InstitudeLogo