import { useNavigate, NavLink } from "react-router-dom";
import logoB from "../img/logoBlue.svg";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-base bg-cover lg:h-70 ">
      <section className="static bottom-0 p-10 flex flex-row justify-center lg:py-16">
        <img
          src={logoB}
          alt="logo"
          className="lg:p-4 h-6 lg:h-11 s:h-6 md:h-8 md:m-8 lg:m-1"
        />
        <section className="text-darkBlue flex flex-row text-xs font-title lg:mx-28 items-center lg:gap-10">
          <NavLink to="/" className="no-underline text-darkBlue">
            <h3>{t("nav1")}</h3>
          </NavLink>
          <NavLink to="/team" className="no-underline text-darkBlue">
            <h3>{t("nav2")}</h3>
          </NavLink>
          <NavLink to="/areas" className="no-underline text-darkBlue">
            <h3>{t("nav3")}</h3>
          </NavLink>
          <NavLink to="/contactus" className="no-underline text-darkBlue">
            <h3>{t("nav4")}</h3>
          </NavLink>
        </section>
      </section>
      <button
        onClick={() => navigate("/home/login")}
        className="rounded-md flex justify-center border-transparent bg-base w-fit px-4 py-2 mt-14 text-darkBlue font-bold  hover:bg-gray-300 cursor-pointer "
      >
        ADMIN
      </button>
    </div>
  );
}
