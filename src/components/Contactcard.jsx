import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import use from "../hooks/use";
import { toast } from "react-toastify";

const Contactcard = ({ contact }) => {
  const {isOpen, onClose, onOpen} = use();
    



  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div
      key={contact.id}
      className="bg-yellow-200 flex justify-between items-center p-2 rounded-lg mt-3 mb-3"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl text-orange-400" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>

      <div className="flex text-3xl">
        <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-orange-400 cursor-pointer"
        />
      </div>
    </div>

    <AddAndUpdateContact contact={contact} isOpen={isOpen} onClose={onClose} isUpdate/>
    </>
  );
};

export default Contactcard;
