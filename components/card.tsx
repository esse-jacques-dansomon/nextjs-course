import React from 'react'

export default function Card(
   {children} :
   { children: React.ReactNode }
) {
  return (
   <div 
   className="block min-h-10 bg-black text-white rounded-lg  p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      {children}
    </div>
  )
}
