import React from 'react'

const Cards = ({title,description,image}) => {
  return (
    <div>
        <div className='flex flex-col gap-2 p-10 '>
            <img src={image}  alt='img'/>
            <h1 className='text-2xl text-center font-medium drop-shadow-xl'>{title}</h1>
            <p className='text-xl text-gray-400'>{description}</p>
        </div>
    </div>
  )
}

export default Cards