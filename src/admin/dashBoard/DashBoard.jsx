import { useState, useEffect } from "react";
import ContactList from "../../contactList/ContactList";
import axios from "axios";
//const CONTACTOS = import.meta.env.VITE_GET_CONTACTS;
export default function DashBoard() {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const resp = await axios.get("https://api-mgl.onrender.com/contact");
        setContacts(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      <div className="mt-12 text-center flex justify-center max-w-screen-2xl lg:w-[100vw]">
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}
