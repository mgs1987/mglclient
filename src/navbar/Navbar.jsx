import logo from "../img/mainlogo.png";
import { Link } from "react-router-dom";
import burguer from "../img/burguer.svg";
const menu = [
  { name: "EL ESTUDIO" },
  { name: "MIEMBROS" },
  { name: "ÁREAS DE PRÁCTICA" },
  { name: "CONTACTO" },
];
export default function Navbar() {
  const handleButton = () => {};
  return (
    <nav className="bg-white flex justify-center gap-60 m-4 items-center">
      <Link to="/">
        <img className="lg:p-2 h-6 lg:h-10 sm:m-1 lg:m-0" src={logo} />
      </Link>
      <div className="lg:hidden">
        <button id="burguer" className="" onClick={handleButton}>
          <img src={burguer} alt="burguer" className="h-6" />
        </button>
      </div>
      <div id="menu" className="text-title lg:flex lg:items-center hidden ">
        {menu.map((m) => {
          return (
            <Link key={m.name} to="" className="no-underline mx-3">
              <h2 className="text-sm text-darkBlue">{m.name}</h2>
            </Link>
          );
        })}
        <div className="flex text-xs text-black bold mx-3 mb-1">
          <h2 className="hover:italic mx-1">ES |</h2>
          <h2 className="hover:italic">EN</h2>
        </div>
      </div>
    </nav>
  );
}
