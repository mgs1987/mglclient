import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
const USER_ADMIN = import.meta.env.VITE_USER_ADMIN;
const PASSWORD = import.meta.env.VITE_PASSWORD;

export default function Login() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (event) => {
    const { value, name } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setError(
      validation({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length) {
      alert("Verifica que todos los campos esten correctos");
    }

    if (input.email === USER_ADMIN && input.password === PASSWORD) {
      setAccess(true);
      navigate("/login/dashboard");
    }

    if (!Object.keys(error).length) {
      setInput({
        email: "",
        password: "",
      });

      setError({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center max-w-screen-2xl lg:w-[100vw]">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col bg-white shadow-md rounded-lg py-5 px-3 m-auto md:w-3/12  lg:w-3/12 mx-5 my-32 "
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChangeLogin}
            placeholder="dirección de correo"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.email && (
              <span className="text-red-700 font-title text-xs">
                {error.email}
              </span>
            )}
          </>
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 uppercase font-title font-bold text-left"
          >
            Password
          </label>
          <input
            id="pass"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChangeLogin}
            placeholder="password"
            className="border-hidden bg-gray-100 w-11/12  p-3 mt-2 placeholder-gray-500 rounded-sm"
          />
          <>
            {error.password && (
              <span className="text-red-700 font-title text-xs">
                {error.password}
              </span>
            )}
          </>
        </div>
        <button
          type="submit"
          className="m-auto font-title lg:text-lg bg-darkBlue text-white rounded-md lg:w-50 w-40 mt-5 xs:w-32 lg:py-2 lg:px-3 lg:h-[48px] h-[38px] lg:mb-6 mb-4 py-2 px-3 hover:bg-gray-700 cursor-pointer"
        >
          ENTRAR
        </button>
      </form>
    </div>
  );
}
