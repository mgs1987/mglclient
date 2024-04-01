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
  const [team, setTeam] = useState();

  const { t } = useTranslation();

  return (
    <div className="md:px-16 flex justify-center items-center flex-col font-title bg-base ">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-5xl ">
        {t("ourteam")}
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:justify-items-center ">
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
              />
            );
          })}
      </div>
      <div className="lg:hidden xs:top-0 h-full w-full justify-between items-center text-3xl">
        <button className="text-5xl border-none bg-base">
          <SlArrowLeft />
        </button>
        <button className="text-5xl border-none bg-base">
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
