import { Link } from "react-scroll";
import { LANGUAGES } from "../constants/index";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <div className="font-title flex md:flex-row s:flex-col s:mx-5 xs:flex-col xs:mx-5 md:items-center sm:justify-start  sm:items-center md:justify-start ">
        <Link
          to="trajectory"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-white text-sm font-title sm:pl-7">{t("nav1")}</h2>
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm text-white sm:px-3">{t("nav2")}</h2>
        </Link>
        <Link
          to="areas"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm text-white sm:px-3">{t("nav3")}</h2>
        </Link>
        <Link
          to="contactus"
          smooth={true}
          duration={500}
          className="no-underline mx-3 cursor-pointer"
        >
          <h2 className="text-sm text-white sm:pl-3">{t("nav4")}</h2>
        </Link>
        <div className="xs:flex xs:justify-end xs:m-3 s:flex s:justify-end s:m-4">
          <select
            defaultValue={i18n.language}
            onChange={onChangeLang}
            className=" text-white font-title bg-darkBlue lg:w-[4vw] md:w-[13vw] md:mx-8 s:w-[20vw] xs:w-[21vw] sm:mx-8"
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
