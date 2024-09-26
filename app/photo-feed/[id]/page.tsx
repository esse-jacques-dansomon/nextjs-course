import React from 'react'
import { Photo, photos } from '../page'
import Image from 'next/image'

const PhotoFeedDetails = (
   { params } :
   { params: { id: number } }
) => {
 const image : Photo = photos.find((photo) => photo.id === params.id) || photos[0]

  return (
    <div className='container mx-auto my-10'>
      <div className="w-1/2 mx-auto">
         <div className="">
            <h1 className='text-center text-2xl font-bold my-4'>{image.title}</h1>
         </div>
         <Image
            src={image.src}
            alt={image.title}
            width={300}
            height={300}
            className='w-full object-cover aspect-square'
         />
         <div className="bg-black text-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <h3>{image.description}</h3>
            <h3>Tags: {image.tags.join(', ')}</h3>
         </div>
      </div>
    </div>
  )
}

export default PhotoFeedDetails
