import React from 'react'

export default function Layout(
   { 
      children,
      analystics,
      notifications,
      users
   } :
    { 
      children: React.ReactNode ,
      analystics: React.ReactNode,
      notifications: React.ReactNode,
      users: React.ReactNode
   }) {
  return (
    <div>
      <div className="">{children}</div>
      <div className="flex flex-row  gap-3">
         <div className="flex flex-col">
            {analystics}
            {users}
         </div>
         <div className="flex flex-1">
            {notifications}
         </div>
      </div>
    </div>
  )
}
