import React from 'react'

const Modal = ({onClose,isOpen,Children}) => {
  return (
    <>
    {isOpen && <div className=''>Modal</div>}
    </>
  )
}

export default Modal