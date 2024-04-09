import { Link } from "react-router-dom";
import linked from "../img/linkedin.png";
import { useTranslation } from "react-i18next";
import GUILLERMO from "../img/Guillermo2.png";
import PEDRO from "../img/Pedro2.png";
import MARTIN from "../img/Martin2.png";
const CardPerson = ({
  name,
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
      className={`xs:flex xs:transition xs:ease-out xs:duration-40 md:mx-3 md:mt-10 xs:justify-center  s:flex s:transition s:ease-out s:duration-40 lg:pb-20 group lg:h-96 lg:w-80 md:h-auto md:w-[42vw] s:h-auto s:w-[80vw] xs:h-auto xs:w-[82vw] s:mx-4 xs:mr-4 xs:ml-4 [perspective:1000px] pb-20 border-solid border-base text-darkBlue xs:pl-${
        name === "Pedro Malm Green" ? 3 : 1
      }`}
      style={{ transform: `translateX(-${current * 109}%) ` }}
    >
      <div className="relative h-full transition-all duration-500 xs:mx-8 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="inset-0 shadow-sha bg-white rounded-lg xs:w-[74vw] s:w-[73vw] s:mx-9 md:m-1">
          <img
            className="h-[345px] w-full object-cover rounded-lg cursor-pointer"
            src={
              name === "Guillermo Malm Green"
                ? GUILLERMO
                : name === "Pedro Malm Green"
                ? PEDRO
                : MARTIN
            }
            alt="foto"
          />
          <h3 className="flex justify-center leading-none text-3xl  xs:text-center s:text-center lg:text-2xl md:text-3xl md:text-center">
            {name}
          </h3>
          <span className="text-2xl s:text-3xl xs:text-md flex justify-center leading-none lg:pb-10 md:pb-12 s:pb-14 xs:pb-14 ">
            {i18n.language === "es" ? rolES : rol}
          </span>
        </div>
        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-sha">
          <div className="flex min-h-full flex-col justify-center bg-base rounded-lg shadow-sha">
            <div className="s:px-4 static flex flex-col justify-center s:h-full s:w-76">
              <section className="text-start flex flex-row justify-between xs:top-0">
                <section>
                  <h3 className="text-darkBlue font-semibold mb-0 px-3 text-xl">
                    {name}
                  </h3>
                  <h4 className="text-black font-light mt-0 px-3">{rol}</h4>
                </section>
                <Link to={linkedin}>
                  {linkedin ? (
                    <img className="size-8 p-4" src={linked} alt="linkedIn" />
                  ) : (
                    ""
                  )}
                </Link>
              </section>
              <p className="text-black  text-justify s:p-1 xs:p-2  lg:p-4 md:p-2 mt-0 s:text-lg lg:leading-tight md:leading-6 xs:leading-6">
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
