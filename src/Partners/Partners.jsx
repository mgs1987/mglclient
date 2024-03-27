const Partners = ({ per, setData }) => {
  const { name, rol, speciality, email, linkedin, description } = per;
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-lg mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        Rol: <span className="font-normal normal-case">{rol}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        Especialidad:{" "}
        <span className="font-normal normal-case">{speciality}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        Correo electrónico:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        LinkedIn: <span className="font-normal normal-case">{linkedin}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-left">
        Descripción:{" "}
        <span className="font-normal normal-case">{description}</span>
      </p>
      <div className="flex justify-evenly mt-5">
        <button
          className="bg-darkBlue hover:bg-green-800 cursor-pointer px-3 py-1 text-white font-bold rounded-sm "
          onClick={() => setData(per)}
        >
          Editar
        </button>
        <button className="bg-red-900 hover:bg-red-600 cursor-pointer px-3 py-1 text-white font-bold rounded-sm">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Partners;
