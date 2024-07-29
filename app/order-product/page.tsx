'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/order-product/success')
        
    }
  return (
    <div>
      <h1>Order Product</h1>
      <button className='bg-slate-500 px-4 py-2' onClick={handleClick}>Buy</button>
    </div>
  )
}
