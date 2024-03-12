//import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants/index";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { i18n, t } = useTranslation();
  //const [idioma, setIdioma] = useState();
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    //setIdioma(e.target.value);
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <div className="font-title lg:flex lg:items-center lg:justify-end  lg:gap-4">
        <NavLink to="/" className="no-underline mx-3 ">
          <h2 className="text-sm font-title text-darkBlue">{t("nav1")}</h2>
        </NavLink>
        <NavLink to="/team" className="no-underline mx-3 ">
          <h2 className="text-sm text-darkBlue ">{t("nav2")}</h2>
        </NavLink>
        <NavLink to="/areas" className="no-underline mx-3 ">
          <h2 className="text-sm text-darkBlue">{t("nav3")}</h2>
        </NavLink>
        <NavLink to="/contactus" className="no-underline mx-3 ">
          <h2 className="text-sm text-darkBlue">{t("nav4")}</h2>
        </NavLink>

        <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => {
            return (
              <option
                className="text-title text-darkBlue font-title"
                key={code}
                value={code}
              >
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
