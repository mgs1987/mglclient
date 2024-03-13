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
    <nav className="bg-white flex lg:justify-center md:justify-between s:justify-between xs:justify-between xs:m-3 s:m-4 lg:gap-60 lg:m-4 sm:m-4 items-center">
      <Link to="/">
        <img className="lg:p-2 h-6 lg:h-10 sm:m-1 lg:m-0" src={logo} />
      </Link>
      <div className="flex lg:items-center xs:hidden s:hidden md:hidden lg:block">
        <Nav />
      </div>
      <button
        id="burguer"
        className="lg:hidden bg-white border-none"
        onClick={handleButton}
      >
        {isOpen ? (
          "X"
        ) : (
          <img src={burguer} alt="burguer" className="h-6 bg-white" />
        )}
      </button>
      {isOpen && (
        <section className="bg-darkBlue">
          <Nav />
        </section>
      )}
    </nav>
  );
}
