import { useNavigate, NavLink } from "react-router-dom";
import logoB from "../img/logoBlue.svg";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-base bg-cover lg:h-64 md:h-auto text-center  s:flex s:items-center  xs:flex xs:items-center xs:justify-center">
        <section className="lg:px-10 flex flex-row justify-center lg:py-20">
          <img
            src={logoB}
            alt="logo"
            className="lg:p-4 lg:h-11 s:h-6 s:p-4 xs:h-5 xs:p-3 md:h-8 md:mx-6 md:my-7 lg:m-1"
          />
          <section className="text-darkBlue flex lg:flex-row md:flex-row flex-col text-xs font-title lg:mx-28 items-center lg:gap-10 md:gap-3 ">
            <NavLink to="/" className="no-underline text-darkBlue s:tealing-1">
              <h4>{t("nav1")}</h4>
            </NavLink>
            <NavLink to="/team" className="no-underline text-darkBlue">
              <h4>{t("nav2")}</h4>
            </NavLink>
            <NavLink to="/areas" className="no-underline text-darkBlue">
              <h4>{t("nav3")}</h4>
            </NavLink>
            <NavLink to="/contactus" className="no-underline text-darkBlue">
              <h4>{t("nav4")}</h4>
            </NavLink>
          </section>
        </section>
      </div>
      <div className="bg-base h-auto ">
        <button
          onClick={() => navigate("/home/login")}
          className="rounded-md flex justify-center border-transparent bg-base w-fit text-darkBlue font-bold  hover:bg-gray-300 cursor-pointer "
        >
          ADMIN
        </button>
      </div>
    </>
  );
}
