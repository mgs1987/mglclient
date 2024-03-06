import logo from "../img/mainlogo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-white flex justify-center gap-60 m-4">
      <div className="">
        <img className="" src={logo} />
      </div>
      <div className="text-title flex items-center">
        <Link to="/" className="no-underline mx-3">
          <h2 className="text-sm text-darkBlue">EL ESTUDIO</h2>
        </Link>
        <Link to="" className="no-underline mx-3">
          <h2 className="text-sm text-darkBlue">MIEMBROS</h2>
        </Link>
        <Link to="" className="no-underline mx-3">
          <h2 className="text-sm text-darkBlue">ÁREAS DE PRÁCTICA</h2>
        </Link>
        <Link to="" className="no-underline mx-3">
          <h2 className="text-sm text-darkBlue">CONTACTO</h2>
        </Link>
        <div className="flex text-xs text-black italic">
          <h2>ES|</h2>
          <h2>EN</h2>
        </div>
      </div>
    </div>
  );
}
