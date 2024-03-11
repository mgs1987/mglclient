import { Link } from "react-router-dom";
import linked from "../img/linkedin.png";
import insta from "../img/instagram.png";
import { useTranslation } from "react-i18next";

const CardPerson = ({ img, name, description }) => {
  const { t } = useTranslation();
  return (
    <div className="pb-10 group h-96 w-80 [perspective:1000px] font-title">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 shadow-xl shadow-slate-500/40 bg-base">
          <img className="h-full w-full object-cover " src={img} alt="foto" />
          <h3 className="flex justify-center">{name}</h3>
          <span className=" text-lg flex justify-center">{t("partner1")}</span>
        </div>
        <div className="absolute inset-0 h-full w-full bg-darkBlue/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col justify-center bg-base">
            <div className=" p-9 static flex flex-col justify-center ">
              <p className="text-black">{description}</p>
              <div>
                <Link>
                  <img className="size-8 m-2" src={linked} alt="linkedIn" />
                </Link>
                <Link>
                  <img className="size-8 m-2" src={insta} alt="instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
