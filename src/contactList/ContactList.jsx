import axios from "axios";
import { useState, useEffect } from "react";

export default function ContactList() {
  const CONTACTOS = import.meta.env.VITE_GET_CONTACTS;
  const [contacts, setContacts] = useState();
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const resp = await axios.get(CONTACTOS);
        setContacts(resp.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <div className="font-title font-darkBlue ">
      <h1>Listado de Contactos con Solicitudes</h1>
      <table className="py-10">
        <thead className="font-bold">
          <tr>
            <th className="px-10 py-3">Nombre del contacto</th>
            <th className="px-10 py-3">Email de contacto</th>
            <th className="px-10 py-3">Teléfono </th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <tr key={index} className="font-thin ">
                  <td className="border border-darkBlue px-10 py-2 text-start">
                    {contact.user_name}
                  </td>
                  <td className="border border-darkBlue px-10 py-2 ">
                    <a
                      href={`mailto:${contact.user_email}`}
                      className="no-underline cursor-pointer text-darkBlue font-semibold px-10 py-2"
                    >
                      {contact.user_email}
                    </a>
                  </td>
                  <td className="border border-darkBlue px-10 py-2 text-start">
                    {contact.phone}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
