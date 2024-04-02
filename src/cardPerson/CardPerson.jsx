import { Link } from "react-router-dom";
import linked from "../img/linkedin.png";
import { TbArrowForward } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const CardPerson = ({
  name,
  img,
  rol,
  description,
  rolES,
  descriptionES,
  linkedin,
  current,
}) => {
  const { i18n } = useTranslation();

  return (
    <div
      className="xs:flex xs:transition xs:ease-out xs:duration-40 s:flex s:transition s:ease-out s:duration-40 lg:pb-20 group lg:h-96 lg:w-80 md:h-auto md:w-[40vw] s:h-96 s:w-70 xs:h-80 xs:w-80 s:mx-4 xs:mx-6 [perspective:1000px] pb-32 border-solid border-base text-darkBlue "
      style={{ transform: `translateX(-${current * 100}%) ` }}
    >
      <div className="relative h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="inset-0 shadow-sha bg-white rounded-lg xs:w-[68vw] xs:m-auto s:w-[63vw] s:h-96 md:m-1">
          <img
            className="h-full w-full object-cover rounded-lg cursor-pointer"
            src={img}
            alt="foto"
          />
          <h3 className="flex justify-center leading-none text-2xl  xs:text-center lg:text-2xl md:text-2xl">
            {name}
          </h3>
          <span className="text-2xl xs:text-xl flex justify-center leading-none lg:pb-10 md:pb-14">
            {i18n.language === "es" ? rolES : rol}
          </span>
        </div>
        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-sha">
          <div className="flex min-h-full flex-col justify-center bg-white rounded-lg">
            <div className="p-1 static flex flex-col justify-center ">
              <section className="text-start flex flex-row justify-between">
                <section>
                  <h3 className="text-darkBlue font-semibold mb-0 px-3">
                    {name}
                  </h3>
                  <h4 className="text-black font-light mt-0 px-3">{rol}</h4>
                </section>
                <Link to={linkedin}>
                  {linkedin ? (
                    <img className="size-8 m-4" src={linked} alt="linkedIn" />
                  ) : (
                    ""
                  )}
                </Link>
              </section>
              <p className="text-black text-justify p-3 mt-0">
                {i18n.language === "es" ? descriptionES : description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
