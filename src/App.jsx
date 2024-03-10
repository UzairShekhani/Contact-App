import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import {collection, doc, getDocs} from "firebase/firestore";  
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/modal";

const App = () => {


  const[contacts, setContacts] = useState([]);

  const [isOpen,setOpen] = useState(false)

  const onOpen = () =>{
    setOpen(true)
  }

  const onClose = () =>{
    setOpen(false)
  }
 
  useEffect(() => {

    const getContacts = async () =>{

      try {
        const contactsRef = collection(db,"contacts") 
        const contactsSnapshot = await getDocs(contactsRef)
        const contactLists = contactsSnapshot.docs.map((doc)=> {
          return {
            id:doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactLists)
      } catch (error) {
        console.log(error);
      }

    }
    getContacts()

  }, [])


  return (
    <>
  <div className="mx-auto max-w-[370px] px-4">
    <Navbar/>
    <div className="flex gap-2">
    <div className="flex relative items-center flex-grow ">
    <IoMdSearch className="ml-1 text-white text-3xl absolute" />
      <input type="text" className=" text-white pl-9 h-10 flex-grow border bg-transparent rounded-md border-white" />
    </div>
    <div>
      <FaPlusCircle onClick={onOpen} className="text-4xl cursor-pointer text-white "/>
    </div>
    </div>
    <div className="mt-4 gap-2 flex flex-col ">
      
      {
        contacts.map((contact)=> (
          <ContactCard key={contact.id} contact={contact}/>
        ))
      }
    </div>
  </div>
  <Modal isOpen={isOpen} onClose={onClose}>

  </Modal>
  </>
  )
};

export default App;
