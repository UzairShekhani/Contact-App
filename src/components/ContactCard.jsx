import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'

const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className="bg-yellow flex justify-between items-center p-2 rounded-lg">
            <div className="flex gap-2">
              <FaUserCircle className="text-4xl text-orange" />
              <div className="">
                <h2 className="">{contact.name}</h2>
                <p className="">{contact.email}</p>
              </div>  
            </div>
            <div className="flex text-2xl">
              <RiEditCircleLine/>
              <IoMdTrash className="text-orange"/>

            </div>
          </div>
  )
}

export default ContactCard