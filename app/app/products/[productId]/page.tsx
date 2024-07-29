import React from 'react'

export default function page({ params } : { params: { productId: string } }) {
  return (
    <div>
      <h1>Product</h1>
      <h3>Product {params.productId}</h3>
    </div>
  )
}
