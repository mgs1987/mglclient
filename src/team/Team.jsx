import { useState } from "react";
import CardPerson from "../cardPerson/CardPerson";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import teamMembers from "./teamMembers";
export default function Team() {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? teamMembers.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === teamMembers.length - 1 ? 0 : current + 1);
  };
  const { t } = useTranslation();

  return (
    <div className="lg:w-[100vw] flex justify-center items-center flex-col font-title bg-base lg:pt-[5rem] lg:pb-[80px] s:pt-10">
      <h1 className="lg:mb-10 mb-12 font-title text-darkBlue flex font-semibold xs:text-[45px] md:text-5xl s:text-5xl sm:text-5xl sm:text-center sm:pb-[45px] ">
        {t("ourteam")}
      </h1>

      <div className="relative w-full">
        <div className="xs:overflow-hidden s:overflow-hidden lg:grid lg:grid-cols-3 lg:gap-10 md:px-8 lg:justify-items-center md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center flex s:w-full xs:w-full s:pb-1 s:pt-0 xs:pt-0 xs:pb-2 xs:items-center s:items-center">
          {teamMembers &&
            teamMembers.map((member) => {
              return (
                <CardPerson
                  name={member.name}
                  key={member.name}
                  rol={member.rol}
                  linkedin={member.linkedin}
                  description={member.description}
                  rolES={member.rolES}
                  specialtyES={member.specialtyES}
                  descriptionES={member.descriptionES}
                  current={current}
                />
              );
            })}
        </div>
        <div className="lg:hidden md:hidden sm:hidden w-full flex justify-between items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 pointer-events-none">
          <button
            onClick={previousSlide}
            className="text-3xl border-none cursor-pointer bg-transparent px-2 pointer-events-auto"
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-3xl border-none cursor-pointer bg-transparent px-2 pointer-events-auto"
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
