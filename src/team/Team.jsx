import { useEffect, useState } from "react";
import axios from "axios";
import CardPerson from "../cardPerson/CardPerson";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import Loading from "../loading/Loading";

export default function Team() {
  const MEMBERS = import.meta.env.VITE_POST_MEMBER;
  useEffect(() => {
    axios
      .get(MEMBERS)
      .then((resp) => setTeam(resp.data))
      .then(() => setLoading(false))
      .catch((e) => console.log(e));
  }, []);
  const [loading, setLoading] = useState(true);
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
    <div className="md:px-6 flex justify-center items-center flex-col font-title bg-base lg:py-24 s:py-10">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-4xl md:text-5xl s:text-5xl ">
        {t("ourteam")}
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:justify-items-center md:flex-wrap md:justify-center flex s:w-full xs:w-full s:py-10 xs:py-10 xs:mx-2">
            {team &&
              team
                .filter((member) => member.active)
                .map((member) => {
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
        </>
      )}
    </div>
  );
}
