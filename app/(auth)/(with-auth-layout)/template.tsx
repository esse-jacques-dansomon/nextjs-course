'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Template({ children } : { children: React.ReactNode }) {   
  const [email, setEmail] = useState("" );
  const [password, setPassword] = useState("");

  
  return (
    <div>
      <h1>Auth Layout</h1>
      <div className="flex flex-row  gap-3">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
      <div className="flex flex-col gap-3 mt-2"> 
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
       {children}
    </div>
  )
}
