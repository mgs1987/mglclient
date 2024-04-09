import { Link } from "react-router-dom";
import logoB from "../img/logoAZES.svg";
import logoA from "../img/logoAZEN.svg";
import IN from "../img/linkedin.png";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="bg-base bg-cover lg:h-64 md:h-auto text-center  flex items-center justify-center max-w-screen-2xl lg:w-[100vw]">
        <section className="lg:px-10 flex flex-col justify-center items-center lg:py-20 ">
          <Link to="/">
            <img
              src={i18n.language === "es" ? logoB : logoA}
              alt="logo"
              className="lg:p-4 md:pr-10 lg:h-11 s:h-6 s:p-4 xs:h-5 xs:p-3 md:h-8 md:mx-6 md:my-7 lg:m-1"
            />
          </Link>
          <Link to="https://www.linkedin.com/company/102793046/admin/feed/posts/?feedType=following">
            <img
              src={IN}
              alt="linkedin"
              className="cursor-pointer h-5 w-5 xs:h-4 xs:w-4 "
            />
          </Link>
          <br />
          <p className="text-gray-400 font-title font-light text-xs lg:text-[10px] md:text-[10px] xs:text-[7px] s:text-[7px]">
            Copyright © 2024 MGL Abogados | Created by: ME.DA.NI
          </p>
        </section>
      </div>
    </>
  );
}
