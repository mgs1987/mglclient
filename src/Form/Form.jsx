import { useEffect, useState } from "react";
import validate from "./validate";

const Form = ({ client, setClient, data }) => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    type_bike: "",
    upkeep: "",
    phone_number: "",
    date: "",
    observations: "",
  });

  const [error, setError] = useState({
    name: "",
    type_bike: "",
    upkeep: "",
    phone_number: "",
    date: "",
    observations: "",
  });

  const generarId = () => {
    const random = Math.random().toString(23).substr(2);
    const fecha = Date.now().toString(23);
    return random + fecha;
  };

  /*   useEffect(() => {
    if (Object.keys(data).length) {
      console.log(data);
      setInput({
        id: data.id,
        name: data.name,
        type_bike: data.type_bike,
        upkeep: data.upkeep,
        phone_number: data.phone_number,
        date: data.date,
        observations: data.observations,
      });
    }
  }, [data]); */

  const handleChangeInput = (event) => {
    const { value, name } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setError(
      validate({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { value, name } = event.target;

    if (Object.keys(error).length) {
      console.log(error);
      alert("Verifica que todos los campos esten correctos");
    }

    if (data.id) {
      client.id = data.id;
      const upDateClient = client.map((e) =>
        e.id === client.id ? client : upDateClient
      );
      setClient(upDateClient);
    } else {
      input.id = generarId();
      setClient([...client, input]);
    }

    if (!Object.keys(error).length) {
      setInput({
        name: "",
        type_bike: "",
        upkeep: "",
        phone_number: "",
        date: "",
        observations: "",
      });

      setError({
        name: "",
        type_bike: "",
        upkeep: "",
        phone_number: "",
        date: "",
        observations: "",
      });
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl">Manejo de socios</h2>
      <p className="text-l mt-5 text-center mb-2">
        Añade tu socio y{" "}
        <span className="text-darkBlue font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-3 m-auto"
      >
        <div className="mb-2">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            Nombre
          </label>
          <input
            id="cliente"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
            placeholder="Nombre completo"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          <>
            {error.name && (
              <span className="text-red-700 text-xs">{error.name}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="bike"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            Rol
          </label>
          <input
            id="bike"
            type="text"
            name="type_bike"
            value={input.type_bike}
            onChange={handleChangeInput}
            placeholder="Figura dentro de la firma"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          <>
            {error.type_bike && (
              <span className="text-red-700 text-xs">{error.type_bike}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            Especialidad
          </label>
          <input
            id="service"
            type="text"
            name="upkeep"
            value={input.upkeep}
            onChange={handleChangeInput}
            placeholder="área de profundidad"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          <>
            {error.upkeep && (
              <span className="text-red-700 text-xs">{error.upkeep}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            correo electrónico
          </label>
          <input
            id="number"
            type="number"
            name="phone_number"
            value={input.phone_number}
            onChange={handleChangeInput}
            placeholder="dirección de correo"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          <>
            {error.phone_number && (
              <span className="text-red-700 text-xs">{error.phone_number}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            LinkedIn
          </label>
          <input
            id="date"
            type="url"
            name="url"
            value={input.date}
            onChange={handleChangeInput}
            placeholder="url"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          <>
            {error.date && (
              <span className="text-red-700 text-xs">{error.date}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="area"
            className="block text-gray-700 uppercase font-bold text-left"
          >
            DESCRIPCIÓN
          </label>
          <textarea
            id="area"
            type="text"
            name="observations"
            value={input.observations}
            onChange={handleChangeInput}
            placeholder="Perfil del socio/ trayectoria/ experiencia"
            className="border-2 w-11/12  p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
          {/* <>
            {error.observations && (
              <span className="text-red-700 text-xs">{error.observations}</span>
            )}
          </> */}
        </div>
        <button
          type="submit"
          className="border-transparent bg-darkBlue w-fit p-2 m-2 text-white font-bold  hover:bg-indigo-800 cursor-pointer"
        >
          CREAR
          {/* {data.id ? "EDITAR" : "AGENDAR"} */}
        </button>
      </form>
    </div>
  );
};

export default Form;
