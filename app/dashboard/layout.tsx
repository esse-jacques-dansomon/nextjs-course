import React from 'react'

export default function Layout(
   { 
      children,
      analystics,
      notifications,
      users,
      login
   } :
    { 
      children: React.ReactNode ,
      analystics: React.ReactNode,
      notifications: React.ReactNode,
      users: React.ReactNode
      login: React.ReactNode
   }) {
    const  isLoggedIn  = false
  return  isLoggedIn ? (
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
  ) : (login)
}
