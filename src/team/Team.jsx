import { useEffect, useState } from "react";
import axios from "axios";
import CardPerson from "../cardPerson/CardPerson";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";

export default function Team() {
  const [team, setTeam] = useState();

  useEffect(() => {
    axios
      .get("https://api-mgl.onrender.com/partner")
      .then((resp) => setTeam(resp.data));
  }, []);

  const { t } = useTranslation();

  return (
    <div className="md:px-16 flex justify-center items-center flex-col font-title bg-base">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-5xl ">
        {t("ourteam")}
      </h1>
      <div className="xs:overflow-hidden">
        <div className="xs:flex xs:transition xs:ease-out xs:duration-400 lg:grid lg:grid-cols-3 lg:gap-8 lg:justify-items-center ">
          {team &&
            team.map((member) => {
              return (
                <CardPerson
                  key={member.partner_id}
                  name={member.name}
                  img={member.img}
                  rol={member.rol}
                  description={member.description}
                />
              );
            })}
        </div>
        <div className="lg:hidden xs:top-0 h-full w-full justify-between items-center px-10 text-3xl">
          <button className="text-3xl">
            <SlArrowLeft />
          </button>
          <button className="text-3xl">
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
