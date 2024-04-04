import { useState } from "react";
import MGLlogo from "../img/logo.svg";
import Xicon from "../img/x.png";
import MGLlogoEN from "../img/MGLlogoEN.svg";
import { Link } from "react-router-dom";
import burguer from "../img/burguer.svg";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!isOpen ? (
        <nav className="max-w-screen-2xl lg:w-[100vw] lg:h-28 s:h-18 xs:h-18 bg-darkBlue flex lg:justify-center justify-between lg:gap-60  lg:items-center">
          <Link to="/">
            <img
              className="lg:p-4 h-6 lg:h-11 s:h-6 md:h-8 md:m-8 xs:m-6 s:my-6 s:mx-8 lg:m-1"
              src={i18n.language === "es" ? MGLlogo : MGLlogoEN}
            />
          </Link>
          <div className="flex lg:items-center xs:hidden s:hidden md:hidden lg:block">
            <Nav />
          </div>
          <button
            id="burguer"
            className="lg:hidden bg-darkBlue border-none xs:mr-8 s:mr-7 md:mr-8 md:p-7"
            onClick={handleButton}
          >
            <img src={burguer} alt="burguer" className="h-6 bg-darkBlue" />
          </button>
        </nav>
      ) : (
        <nav className="lg:max-w-screen-xl  lg:h-28 s:h-18 xs:h-18 bg-darkBlue flex lg:justify-center justify-between lg:gap-60  lg:items-center">
          <Link to="/">
            <img
              className="lg:p-4 h-6 lg:h-11 s:h-6 md:h-8 md:m-8 xs:m-6 s:my-6 s:mx-8 lg:m-1"
              src={i18n.language === "en" ? MGLlogo : MGLlogoEN}
            />
          </Link>
          <div className="flex lg:items-center xs:hidden s:hidden md:hidden lg:block">
            <Nav />
          </div>
          <button
            id="xicon"
            className="lg:hidden bg-darkBlue border-none xs:mr-8 s:mr-7 md:mr-8 md:p-7"
            onClick={handleButton}
          >
            <img src={Xicon} alt="xicon" className="h-4 p-1 bg-white" />;
          </button>
        </nav>
      )}
      {isOpen && (
        <section className="bg-darkBlue w-[100vw] md:flex justify-center md:h-20">
          <Nav />
        </section>
      )}
    </>
  );
}
