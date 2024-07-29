import { notFound } from "next/navigation"

function page({ params } : { params: { productId: string, reviewId: string } }) {


  if (params?.productId !== params?.reviewId) {
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
