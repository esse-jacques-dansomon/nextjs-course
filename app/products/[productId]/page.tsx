import React from 'react'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata =  async ({
  params
}: Props)  => {
   {
    const titleFromApi =  await new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Product ${params.productId} title`)
      }, 100)
    })
    return {
      title: titleFromApi,
      description: `Product ${params.productId} description`,
    }
  }

}



export default function page({ params }: Props) {
  return (
    <div>
      <h1>Product</h1>
      <h3>Product {params.productId}</h3>
    </div>
  )
}
