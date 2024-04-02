import { useEffect, useState } from "react";
import validate from "./validate";
import axios from "axios";

const Form = ({ partner, setPartner, data }) => {
  const [imageCloud, setImageCloud] = useState("");
  const [input, setInput] = useState({
    name: "",
    img: "",
    rol: "",
    rolES: "",
    specialty: "",
    specialtyES: "",
    email: "",
    linkedin: "",
    description: "",
    descriptionES: "",
  });

  const [error, setError] = useState({
    name: "",
    img: "",
    rol: "",
    rolES: "",
    specialty: "",
    specialtyES: "",
    email: "",
    linkedin: "",
    description: "",
    descriptionES: "",
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    // eslint-disable-next-line react/prop-types
    data.append("file", file);
    // eslint-disable-next-line no-undef, react/prop-types
    data.append("upload_preset", "fb4nlbpi");
    await axios
      .post("https://api.cloudinary.com/v1_1/dpeco9dlp/image/upload", data)
      .then((resp) => {
        let inputURL = resp.data.secure_url;
        setInput({ ...input, img: inputURL });
      });
  };

  const deleteImage = () => {
    setImageCloud("");
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      setInput({
        name: data.name,
        rol: data.rol,
        img: data.img,
        rolES: data.rolES,
        specialty: data.specialty,
        specialtyES: data.specialtyES,
        email: data.email,
        linkedin: data.linkedin,
        description: data.description,
        descriptionES: data.descriptionES,
      });
    }
  }, [data]);

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      img: imageCloud,
    }));

    setError(
      validate({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(error).length) {
      console.log(error);
      alert("Verifica que todos los campos esten correctos");
    }

    const updatePartner = {
      partner_id: data.partner_id,
      active: data.active,
      name: input.name,
      rol: input.rol,
      img: input.img,
      rolES: input.rolES,
      specialty: input.specialty,
      specialtyES: input.specialtyES,
      email: input.email,
      linkedin: input.linkedin,
      description: input.description,
      descriptionES: input.descriptionES,
    };

    try {
      if (data.partner_id) {
        console.log(data.partner_id);
        console.log(updatePartner);
        await axios.put(
          "https://api-mgl.onrender.com/partner/edit/",
          updatePartner
        );
        setPartner((prevPartner) =>
          prevPartner.map((p) =>
            p.partner_id === data.partner_id ? updatePartner : p
          )
        );
        setInput({
          name: "",
          rol: "",
          rolES: "",
          specialty: "",
          specialtyES: "",
          email: "",
          linkedin: "",
          description: "",
          descriptionES: "",
        });

        setError({
          name: "",
          rol: "",
          rolES: "",
          specialty: "",
          specialtyES: "",
          email: "",
          linkedin: "",
          description: "",
          descriptionES: "",
        });
      } else {
        await axios.post("https://api-mgl.onrender.com/partner", input);
        setPartner([...partner, input]);
        if (!Object.keys(error).length) {
          setInput({
            name: "",
            rol: "",
            rolES: "",
            specialty: "",
            specialtyES: "",
            email: "",
            linkedin: "",
            description: "",
            descriptionES: "",
          });

          setError({
            name: "",
            rol: "",
            rolES: "",
            specialty: "",
            specialtyES: "",
            email: "",
            linkedin: "",
            description: "",
            descriptionES: "",
          });
        }
      }
      /* setPartner([...partner, input]); */
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
      console.log("Detalles del error:", error.response.data);
    }
  };
  return (
    <div className="md:w-1/3 lg:w-1/3 mx-5 h-full">
      <h2 className="font-title font-black text-2xl">Manejo de socios</h2>
      <p className="text-l mt-5 text-center mb-2 font-title">
        Añade a tus socios y{" "}
        <span className="text-darkBlue font-title font-bold">
          Administralos
        </span>
      </p>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="bg-white shadow-md rounded-lg py-5 px-3 m-auto"
      >
        <div className="mb-2">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Nombre Completo
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
            htmlFor="bike"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Rol (Ingles)
          </label>
          <input
            id="rolES"
            type="rolES"
            name="rolES"
            value={input.rolES}
            onChange={handleChangeInput}
            placeholder="Figura dentro de la firma"
            className="border-hidden bg-gray-100 w-11/12 p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.rolES && (
              <span className="text-red-700 text-xs">{error.rolES}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Especialidad (Ingles)
          </label>
          <input
            id="specialty"
            type="text"
            name="specialty"
            value={input.specialty}
            onChange={handleChangeInput}
            placeholder="área de profundidad"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.specialty && (
              <span className="text-red-700 text-xs">{error.specialty}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Especialidad (Español)
          </label>
          <input
            id="specialtyES"
            type="text"
            name="specialtyES"
            value={input.specialtyES}
            onChange={handleChangeInput}
            placeholder="área de profundidad"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.specialtyES && (
              <span className="text-red-700 text-xs">{error.specialtyES}</span>
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
            htmlFor="area1"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            DESCRIPCIÓN
          </label>
          <textarea
            id="area1"
            type="text"
            name="description"
            value={input.description}
            onChange={handleChangeInput}
            placeholder="Perfil del socio/ trayectoria/ experiencia"
            className="font-title border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.description && (
              <span className="text-red-700 text-xs">{error.description}</span>
            )}
          </>
        </div>
        <div className="mb-4">
          <label
            htmlFor="area"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            DESCRIPCIÓN (ingles)
          </label>
          <textarea
            id="area"
            type="text"
            name="descriptionES"
            value={input.descriptionES}
            onChange={handleChangeInput}
            placeholder="Perfil del socio/ trayectoria/ experiencia"
            className="font-title border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.descriptionES && (
              <span className="text-red-700 text-xs">
                {error.descriptionES}
              </span>
            )}
          </>
        </div>

        <h3 className="font-title">Seleccionar imagen de perfil</h3>
        <input type="file" accept="image/" onChange={(e) => uploadImage(e)} />
        {input.img && (
          <div>
            <img
              src={input.img}
              alt="img_profile"
              className="h-full w-full object-cover rounded-lg"
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
          {data.partner_id ? "EDITAR" : "CREAR"}
        </button>
      </form>
    </div>
  );
};

export default Form;
