import { Link } from "react-router-dom";
import linked from "../img/linkedin.png";
import { TbArrowForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const CardPerson = ({ img, name, description }) => {
  const { t } = useTranslation();
  return (
    <div className="lg:pb-20 group lg:h-96 lg:w-80 md:h-80 md:w-80 s:h-80 s:w-80 xs:h-80 xs:w-80 [perspective:1000px] pb-32 font-title border-solid border-base text-darkBlue ">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="inset-0 shadow-sha bg-white rounded-lg ">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={img}
            alt="foto"
          />
          <h3 className="flex justify-center leading-none">{name}</h3>
          <span className=" text-lg flex justify-center leading-none">
            {t("partner1")}
          </span>
          <section className="xs:flex xs:flex-row xs:justify-between s:flex s:flex-row s:justify-between">
            <Link to="">
              <img className="size-8 my-2 mx-4" src={linked} alt="linkedIn" />
            </Link>
            <button className="hidden xs:block s:block bg-white border-none">
              <TbArrowForward size={30} />
            </button>
          </section>
        </div>
        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-sha">
          <div className="flex min-h-full flex-col justify-center bg-white rounded-lg">
            <div className="p-1 static flex flex-col justify-center ">
              <section className="text-start ">
                <h3 className="text-darkBlue font-semibold italic mb-0 px-3">
                  {name}
                </h3>
                <h4 className="text-black font-light mt-0 px-3">
                  {t("partner1")}
                </h4>
              </section>
              <p className="text-black text-justify p-3 mt-0">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
