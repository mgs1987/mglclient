import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Partners = ({ per, setData, partner }) => {
  const [prevData, setPrevData] = useState([]);
  const {
    partner_id,
    name,
    rol,
    img,
    rolES,
    specialty,
    specialtyES,
    email,
    linkedin,
    description,
    descriptionES,
  } = per;

  const handleDelete = async (partner_id) => {
    try {
      console.log(partner_id);
      const resp = await axios.put(
        `https://api-mgl.onrender.com/partner/delete/${partner_id}`
      );
      // Actualizar el estado para reflejar el cambio
      setData((prevData) =>
        prevData.map((item) => {
          if (item.partner_id === partner_id) {
            return { ...item, active: !item.active };
          }
          return item;
        })
      );
      /* console.log(per.active);
      console.log(setData); */
      toast.success(resp.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {}, [per]);

  return (
    <div
      className={`${
        per.active ? "bg-white" : "bg-gray-300"
      } mx-2 shadow-md px-5 py-10 rounded-lg mb-5 lg:flex flex-row lg:justify-center`}
    >
      <div>
        <img
          src={img}
          alt="socio"
          className="lg:size-40 lg:rounded-lg lg:m-6"
        />
      </div>
      <div>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Nombre: <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Rol(EN): <span className="font-normal normal-case">{rol}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Rol(ES): <span className="font-normal normal-case">{rolES}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Especialidad (EN):{" "}
          <span className="font-normal normal-case">{specialty}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Especialidad(ES):{" "}
          <span className="font-normal normal-case">{specialtyES}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Correo electrónico:{" "}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          LinkedIn: <span className="font-normal normal-case">{linkedin}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Descripción (EN):{" "}
          <span className="font-normal normal-case">{description}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase text-left">
          Descripción (ES):{" "}
          <span className="font-normal normal-case">{descriptionES}</span>
        </p>
      </div>
      <div className="m-2">
        <div className="flex justify-evenly mt-5">
          <button
            className="bg-darkBlue hover:bg-green-800 cursor-pointer px-3 py-1 text-white font-bold rounded-sm "
            onClick={() => setData({ ...per })}
          >
            Editar
          </button>
          <button
            className="bg-red-900 hover:bg-red-600 cursor-pointer px-3 py-1 text-white font-bold rounded-sm"
            onClick={() => handleDelete(partner_id)}
          >
            {per.active ? "Desactivar" : "Activar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
