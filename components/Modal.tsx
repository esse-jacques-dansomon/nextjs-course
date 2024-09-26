import React from 'react'

const Modal = (
  {
    children 
  } : {
    children: React.ReactNode
  }
) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
    <div className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      {/* Modal content */}
      <div className="p-6">

        {children}
      </div>
    </div>
  </div>
  )
}

export default Modal