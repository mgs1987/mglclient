import palermo from "../img/palermo.png";
import wsp from "../img/wsp.png";
import tel from "../img/tel.png";
import mail from "../img/mail.png";
export default function Map() {
  return (
    <div className="bg-base grid grid-cols-2 lg:gap-0 text-base font-title lg:h-72 lg:py-4 md:h-64 md:px-1 md:py-12 s:h-48 xs:h-48 xs:py-5 s:py-5">
      <img
        src={palermo}
        alt="pal"
        className="lg:h-72 md:h-64 hidden lg:block md:block md:w-[50vw] "
      />
      <section className="bg-darkBlue leading-3 flex justify-center flex-col items-center s:w-[100vw] xs:w-[100vw]">
        <section className="s:text-start xs:text-start xs:text-sm ">
          <h3 className="text-md s:text-sm ">Por urgencias contactarse : </h3>
          <p className="s:leading-none flex items-center s:text-sm">
            {/* <img
              src={wsp}
              alt="wsp"
              className="h-4 lg:mx-1 md:h-5 md:mx-2 s:mx-2 xs:mx-2"
            /> */}
            <img
              src={tel}
              alt="tel"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2"
            />
            + 54 9 (11) 6187-9552 (Argentina)
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={wsp}
              alt="wsp"
              className="h-4 lg:mx-1 md:h-5 md:mx-2 s:mx-2 xs:mx-2"
            />
            {/* <img
              src={tel}
              alt="tel"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-1 md:mr-2 s:mr-2 xs:mr-2"
            /> */}
            +1 (437) 858 2301 (Exterior)
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={mail}
              alt="mail"
              className="h-4 lg:lg:mx-2 md:h-4 md:mx-2 s:mx-2 xs:ml-2 xs:mr-4 "
            />
            malmglerner@gmail.com
          </p>
        </section>
      </section>
    </div>
  );
}
