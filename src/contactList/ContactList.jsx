// eslint-disable-next-line react/prop-types
export default function ContactList({ contacts }) {
  return (
    <div className="font-title font-darkBlue">
      <h1>Listado de Contactos Registrados</h1>
      <table className="border-collapse border border-darkBlue">
        <thead className="font-bold text-start">
          <tr>
            <th className="border border-darkBlue px-8 py-2">
              Nombre del contacto
            </th>
            <th className="border border-darkBlue px-8 py-2">
              Email de contacto{" "}
            </th>
            <th className="border border-darkBlue px-8 py-2">Telefono </th>
            <th className="border border-darkBlue px-8 py-2">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <tr key={index} className="font-thin text-center">
                  <td className="border border-darkBlue px-8 py-2">
                    {contact.user_name}
                  </td>
                  <td className="border border-darkBlue px-8 py-2">
                    {contact.user_email}
                  </td>
                  <td className="border border-darkBlue px-8 py-2">
                    {contact.phone}
                  </td>
                  <td className="border border-darkBlue px-8 py-2">
                    {contact.message}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
