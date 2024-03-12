import { useState } from "react";
import logo from "../img/mainlogo.png";
//import enLogo from "../img/lawyers.png";
import { Link } from "react-router-dom";
import burguer from "../img/burguer.svg";
import Nav from "./Nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white flex justify-center lg:gap-60 lg:m-4 sm:m-4 items-center">
      <Link to="/">
        <img className="lg:p-2 h-6 lg:h-10 sm:m-1 lg:m-0" src={logo} />
      </Link>
      <div className="flex items-center sm:hidden lg:block">
        <Nav />
      </div>
      <button id="burguer" className="lg:hidden" onClick={handleButton}>
        {isOpen ? "X" : <img src={burguer} alt="burguer" className="h-6" />}
      </button>
    </nav>
  );
}
