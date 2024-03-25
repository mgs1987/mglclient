import { useEffect, useState } from "react";
import validate from "./validate";
import axios from "axios";

const Form = ({ partner, setPartner, data }) => {
  const [imageCloud, setImageCloud] = useState("");
  const [input, setInput] = useState({
    id: "",
    img: "",
    rol: "",
    speciality: "",
    email: "",
    linkedin: "",
    description: "",
  });
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    // eslint-disable-next-line react/prop-types
    data.append("file", file);
    // eslint-disable-next-line no-undef, react/prop-types
    data.append("upload_preset", "fb4nlbpi");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dpeco9dlp/image/upload",
      data
    );
    console.log(response.data.secure_url);
    setImageCloud(response.data.secure_url);
    //setInput({ ...input, img: response.data.secure_url });
  };
  const deleteImage = () => {
    setImageCloud("");
  };
  const [error, setError] = useState({
    name: "",
    rol: "",
    speciality: "",
    email: "",
    linkedin: "",
    description: "",
  });

  const generarId = () => {
    const random = Math.random().toString(23).substr(2);
    const fecha = Date.now().toString(23);
    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      console.log(data);
      setInput({
        id: data.id,
        name: data.name,
        rol: data.rol,
        speciality: data.speciality,
        email: data.email,
        linkedin: data.linkedin,
        description: data.description,
      });
    }
  }, [data]);

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
      partner.id = data.id;
      const upDatePartner = partner.map((e) =>
        e.id === partner.id ? partner : upDatePartner
      );
      setPartner(upDatePartner);
    } else {
      input.id = generarId();
      setPartner([...partner, input]);
    }

    if (!Object.keys(error).length) {
      setInput({
        name: "",
        rol: "",
        speciality: "",
        email: "",
        linkedin: "",
        description: "",
      });

      setError({
        name: "",
        rol: "",
        speciality: "",
        email: "",
        linkedin: "",
        description: "",
      });
    }
  };

  return (
    <div className="md:w-1/3 lg:w-1/3 mx-5 h-full">
      <h2 className=" font-title font-black text-2xl">Manejo de socios</h2>
      <p className="text-l mt-5 text-center mb-2 font-title">
        Añade a tus socios y{" "}
        <span className="text-darkBlue font-title font-bold">
          Administralos
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-3 m-auto"
      >
        <div className="mb-2">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-title font-bold text-left"
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
            className="border-hidden bg-gray-100 w-11/12 p-3 mt-2 placeholder-gray-500 rounded-sm"
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
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Rol
          </label>
          <input
            id="rol"
            type="rol"
            name="rol"
            value={input.rol}
            onChange={handleChangeInput}
            placeholder="Figura dentro de la firma"
            className="border-hidden bg-gray-100 w-11/12 p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.rol && (
              <span className="text-red-700 text-xs">{error.rol}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Especialidad
          </label>
          <input
            id="speciality"
            type="text"
            name="speciality"
            value={input.speciality}
            onChange={handleChangeInput}
            placeholder="área de profundidad"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.speciality && (
              <span className="text-red-700 text-xs">{error.speciality}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            placeholder="dirección de correo"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.email && (
              <span className="text-red-700 text-xs">{error.email}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            LinkedIn
          </label>
          <input
            id="linked"
            type="url"
            name="linkedin"
            value={input.linkedin}
            onChange={handleChangeInput}
            placeholder="url"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.linkedin && (
              <span className="text-red-700 text-xs">{error.linkedin}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="area"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            DESCRIPCIÓN
          </label>
          <textarea
            id="area"
            type="text"
            name="description"
            value={input.description}
            onChange={handleChangeInput}
            placeholder="Perfil del socio/ trayectoria/ experiencia"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.description && (
              <span className="text-red-700 text-xs">{error.description}</span>
            )}
          </>
        </div>

        <h1>Seleccionar imagen de perfil</h1>
        <input type="file" accept="image/" onChange={(e) => uploadImage(e)} />
        {imageCloud && (
          <div>
            <img
              src={imageCloud}
              className="h-full w-full object-cover rounded-lg"
              alt="profileImg"
            />
            <button type="button" onClick={deleteImage}>
              Eliminar imagen
            </button>
          </div>
        )}
        <br />
        <button
          type="submit"
          className="border-transparent bg-darkBlue w-fit p-2 m-2 text-white font-bold  hover:bg-indigo-800 cursor-pointer"
        >
          {data.id ? "EDITAR" : "AGENDAR"}
        </button>
      </form>
    </div>
  );
};

export default Form;
