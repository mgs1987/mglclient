import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LANGUAGES } from "../constants/index";
import { useTranslation } from "react-i18next";
// import UK from "../img/united-kingdom.png";
// import SP from "../img/spain.png";

export default function Nav() {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <div className="font-title flex md:flex-row s:flex-col s:mx-5 xs:flex-col xs:mx-5 md:items-center md:justify-start lg:items-center lg:justify-end  lg:gap-4 ">
        <Link
          to="landing"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="sm:text-white xs:text-white text-sm font-title lg:text-white s:text-white">
            {t("nav1")}
          </h2>
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm lg:text-white sm:text-white xs:text-white s:text-white">
            {t("nav2")}
          </h2>
        </Link>
        <Link
          to="areas"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm lg:text-white sm:text-white xs:text-white s:text-white">
            {t("nav3")}
          </h2>
        </Link>
        <Link
          to="contactus"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm lg:text-white sm:text-white xs:text-white s:text-white">
            {t("nav4")}
          </h2>
        </Link>
        <div className="xs:flex xs:justify-end xs:m-3 s:flex s:justify-end s:m-4">
          <select
            defaultValue={i18n.language}
            onChange={onChangeLang}
            className=" text-white font-title bg-darkBlue md:w-[13vw] md:mx-8 s:w-[20vw] xs:w-[21vw] lg:w-[7vw]"
          >
            {LANGUAGES.map(({ code, label }) => {
              return (
                <option className=" text-white" key={code} value={code}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
