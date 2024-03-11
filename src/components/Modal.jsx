import React from 'react'
import { createPortal } from 'react-dom';
import { MdOutlineClose } from "react-icons/md";
const Modal = ({onClose,isOpen,Children}) => {
  return createPortal (
    <>
       {isOpen &&(

        <>
    <div className='m-auto z-50 relative min-h-[198px] max-w-[80%] bg-white p-4'>
        <div className='flex justify-end'>
            <MdOutlineClose onClick={onClose} className='text-2xl self-end'/>
        </div>
        {Children}
    </div>
    <div onClick={onClose} className='backdrop-blur h-screen w-screen z-40 absolute top-0'/>
    </>
)}
    </>
    ,document.getElementById("modal-root")
  )
}

export default Modal