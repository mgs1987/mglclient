import logoB from "../img/logoBlue.svg";
//import { useTranslation } from "react-i18next";
export default function Footer() {
  return (
    <>
      <div className="bg-base bg-cover lg:h-64 md:h-auto text-center  s:flex s:items-center  xs:flex xs:items-center xs:justify-center max-w-screen-2xl lg:w-[100vw]">
        <section className="lg:px-10 flex lg:flex-row md:flex-row s:flex-col xs:flex-col justify-center lg:py-20">
          <img
            src={logoB}
            alt="logo"
            className="lg:p-4 md:pr-10 lg:h-11 s:h-6 s:p-4 xs:h-5 xs:p-3 md:h-8 md:mx-6 md:my-7 lg:m-1"
          />
          <section className="text-darkBlue flex flex-row lg:text-md md:text-sm font-title lg:mx-28 items-center lg:gap-10 md:gap-3  xs:text-xs xs:p-2 xs:gap-2 s:text-xs s:gap-4 s:p-3"></section>
        </section>
      </div>
    </>
  );
}
