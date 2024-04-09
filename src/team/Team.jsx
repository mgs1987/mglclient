import { useState } from "react";
import CardPerson from "../cardPerson/CardPerson";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import team from "./team.js";
export default function Team() {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? team.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === team.length - 1 ? 0 : current + 1);
  };
  const { t } = useTranslation();

  return (
    <div className="md:px-6 flex justify-center items-center flex-col font-title bg-base lg:pt-[5rem] s:py-10">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-4xl md:text-5xl s:text-5xl ">
        {t("ourteam")}
      </h1>

      <div className="xs:overflow-hidden s:overflow-hidden lg:grid lg:grid-cols-3 lg:gap-10 lg:justify-items-center md:flex-wrap md:justify-center flex s:w-full xs:w-full s:pb-10 s:pt-0 xs:pt-0 xs:pb-20">
        {team &&
          team.map((member) => {
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
      <div className="lg:hidden md:hidden w-full flex justify-between items-center absolute">
        <button
          onClick={previousSlide}
          className="text-3xl border-none cursor-pointer xs:mr-3 bg-transparent"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-3xl border-none cursor-pointer xs:mr-2 bg-transparent"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
