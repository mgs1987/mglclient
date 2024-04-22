import { useState } from "react";
import { useTranslation } from "react-i18next";
import Penal from "../img/whitepenal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
const maxHeightOpen = "500px";
const maxHeightClosed = "0px";
export default function ButtonAreas() {
  const [acordeon, setAcordeon] = useState(false);
  const [acordeon1, setAcordeon1] = useState(false);
  const [acordeon2, setAcordeon2] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="lg:hidden md:hidden font-title text-darkBlue  bg-base ">
      <section className="xs:mb-16 s:mb-14">
        <button
          onClick={() => setAcordeon(!acordeon)}
          className="s:my-3 xs:mb-8 cursor-pointer border-none xs:h-28 xs:w-[82vw] s:p-3 s:w-[75vw] s:h-26  bg-darkBlue text-white flex flex-row items-center rounded-md"
        >
          <img
            src={Penal}
            alt={"item"}
            className="xs:h-9 xs:py-7 xs:px-6 s:h-9 s:px-2 s:py-6"
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
          className="xs:w-[82vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out s:mt-[-30px] xs:mt-[-52px]"
          style={{
            maxHeight: acordeon ? maxHeightOpen : maxHeightClosed,
          }}
        >
          <p className="overflow-hidden text-justify bg-darkBlue text-white font-regular px-6 py-10 text-md ">
            {t("DPDescription")}
          </p>
        </div>
      </section>
      <section className="xs:mb-4 s:mb-14 ">
        <button
          onClick={() => setAcordeon1(!acordeon1)}
          className="s:mt-6 xs:mb-14 cursor-pointer border-none xs:text-center xs:h-28 xs:w-[82vw] s:p-3 s:h-26 s:w-[75vw] bg-white text-darkBlue flex flex-row items-center shadow-sha rounded-md"
        >
          <img
            src={Const}
            alt={"item"}
            className="xs:h-11 xs:py-7 xs:px-7 s:h-11 s:px-3 s:py-6"
          />
          <h2 className="text-2xl xs:mx-1 s:mx-6 font-medium text-start">
            {t("DC")}
          </h2>
          {acordeon1 ? (
            <span className="text-3xl mx-1">
              <IoChevronUp />
            </span>
          ) : (
            <span className="text-3xl">
              <IoChevronDown />
            </span>
          )}
        </button>
        <div
          className="xs:w-[82vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out s:mt-[-38px] xs:mt-[-74px]"
          style={{
            maxHeight: acordeon1 ? maxHeightOpen : maxHeightClosed,
          }}
        >
          <p className="overflow-hidden text-justify leading-5 s:tracking-normal xs:tracking-normal bg-white text-darkBlue px-6 py-10 ">
            {t("DCDescription")}
          </p>
        </div>
      </section>
      <section className="xs:mt-16 s:mb-10 xs:mb-12 ">
        <button
          onClick={() => setAcordeon2(!acordeon2)}
          className="s:mt-20 xs:mb-14  cursor-pointer border-none xs:h-28 xs:w-[82vw] s:p-3 s:w-[75vw] s:h-26  bg-darkBlue text-white flex flex-row items-center rounded-md"
        >
          <img
            src={Internat}
            alt={"item"}
            className="xs:h-9  xs:py-7 xs:px-6 s:h-10 s:px-1 s:py-6"
          />
          <section className="flex flex-col items-start justify-center">
            <h2 className="s:mx-7 text-2xl xs:mx-1 font-medium text-start">
              {t("DI")}
            </h2>
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
          className="xs:w-[82vw] s:w-[75vw] grid overflow-hidden transition-all duration-300 ease-in-out s:mt-[-19px] xs:mt-[-82px]"
          style={{
            maxHeight: acordeon2 ? maxHeightOpen : maxHeightClosed,
          }}
        >
          <p className="overflow-hidden text-justify bg-darkBlue text-white font- px-6 py-10 text-md ">
            {t("DIDescription")}
          </p>
        </div>
      </section>
    </div>
  );
}
