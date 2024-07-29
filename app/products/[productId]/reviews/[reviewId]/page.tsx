'use client'
import { randomInt } from "crypto"
import { notFound } from "next/navigation"

function page({ params } : { params: { productId: string, reviewId: string } }) {




  if (Math.random() < 0.5) {
    throw new Error('Product 2 is not available')
  }

    if (params?.productId === "100") {
    return notFound()
  }

  return (
    <div>
      <h1>Review</h1>
      <h3>Review {params.reviewId} for Product {params.productId}</h3>
      
    </div>
  )
}

export default page
