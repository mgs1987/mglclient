import { useEffect, useState } from "react";
import axios from "axios";
import CardPerson from "../cardPerson/CardPerson";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";

export default function Team() {
  useEffect(() => {
    axios
      .get("https://api-mgl.onrender.com/partner")
      .then((resp) => setTeam(resp.data))
      .catch((e) => console.log(e));
  }, []);

  const [team, setTeam] = useState([]);
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? team.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === team.length - 1 ? 0 : current + 1);
  };
  const { t } = useTranslation();

  return (
    <div className="md:px-16 flex justify-center items-center flex-col font-title bg-base ">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-5xl ">
        {t("ourteam")}
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:justify-items-center md:flex-wrap md:justify-center flex xs:overflow-hidden s:w-full xs:w-full">
        {team &&
          team.map((member) => {
            return (
              <CardPerson
                name={member.name}
                key={member.partner_id}
                img={member.img}
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
          className="text-3xl border-none bg-base cursor-pointer mx-2"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-3xl border-none bg-base cursor-pointer mx-2"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
