import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Products Page</h1>  
      {[...Array(10)].map((_, i) => (
        <>
         <div key={i} className="flex justify-between items-center">
         <div className="flex flex-col items-center">
           <h3>Product {i + 1}</h3>
           <p>Price {i + 1}</p>
         </div>
         <Link href={`/products/${i + 1}`}>
           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
             Buy
           </button>
         </Link>
         
        </div>
        </>
      ))}
    </div>
  )
}

export default page