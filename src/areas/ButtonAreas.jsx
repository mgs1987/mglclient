import { useState } from "react";
import { useTranslation } from "react-i18next";
import Penal from "../img/whitepenal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

export default function ButtonAreas() {
  const [acordeon, setAcordeon] = useState(false);
  const [acordeon1, setAcordeon1] = useState(false);
  const [acordeon2, setAcordeon2] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="lg:hidden md:hidden font-title text-darkBlue flex flex-col justify-center items-center bg-base">
      <button
        onClick={() => setAcordeon(!acordeon)}
        className="cursor-pointer border-none xs:h-28 xs:w-[82vw] s:p-3 s:w-[75vw] s:h-26  bg-darkBlue text-white flex flex-row items-center rounded-md"
      >
        <img
          src={Penal}
          alt={"item"}
          className="xs:h-9 xs:py-7 xs:px-7 s:h-9 s:px-1 s:py-6"
        />
        <h2 className="flex flex-col items-start justify-center s:mx-6 text-2xl  xs:mr-4 font-medium">
          {t("DP")}
        </h2>
        {acordeon ? (
          <span className="s:mr-1 text-3xl">
            <IoChevronUp />
          </span>
        ) : (
          <span className="text-3xl">
            <IoChevronDown />
          </span>
        )}
      </button>
      <div
        className={`xs:w-[80vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out mt-[-18px] ${
          acordeon ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-justify bg-darkBlue text-white font-bold px-11 py-10 text-md ">
          {t("DPDescription")}
        </p>
      </div>
      <button
        onClick={() => setAcordeon1(!acordeon1)}
        className="cursor-pointer border-none xs:text-center xs:h-28 xs:w-[82vw] s:my-5 s:p-3 s:h-26 s:w-[75vw] bg-white text-darkBlue flex flex-row items-center shadow-sha rounded-md"
      >
        {acordeon ? (
          <span className="text-3xl">
            <IoChevronUp />
          </span>
        ) : (
          <span className="text-3xl">
            <IoChevronDown />
          </span>
        )}
        <h2 className="s:text-center text-2xl xs:mx-6 s:mx-6 font-medium">
          {t("DC")}
        </h2>
        <img
          src={Const}
          alt={"item"}
          className="xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6"
        />
      </button>
      <div
        className={`xs:w-[80vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out ${
          acordeon1
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-justify bg-white text-darkBlue font-light px-11 py-10 text-md">
          {t("DCDescription")}
        </p>
      </div>
      <button
        onClick={() => setAcordeon2(!acordeon2)}
        className="cursor-pointer border-none xs:h-28 xs:w-[82vw] s:p-3 s:w-[75vw] s:h-26  bg-darkBlue text-white flex flex-row items-center rounded-md"
      >
        <img
          src={Internat}
          alt={"item"}
          className="xs:h-9 xs:py-7 xs:px-6 s:h-9 s:px-1 s:py-6"
        />
        <section className="flex flex-col items-start justify-center">
          <h2 className="s:mx-6 text-2xl xs:mx-2 font-medium">{t("DI")}</h2>
        </section>
        {acordeon2 ? (
          <span className="text-3xl">
            <IoChevronUp />
          </span>
        ) : (
          <span className="text-3xl">
            <IoChevronDown />
          </span>
        )}
      </button>
      <div
        className={`xs:w-[80vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out ${
          acordeon2
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="text-justify xs:hidden s:hidden font-light">
          {t("DIDescription")}
        </p>
      </div>
    </div>
  );
}
