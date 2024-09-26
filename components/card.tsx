import React from 'react'

export default function Card(
   {children} :
   { children: React.ReactNode }
) {
  return (
   <div 
   className="block bg-black text-black rounded-lg bg-whie p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      {children}
    </div>
  )
}
