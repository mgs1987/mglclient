import palermo from "../img/palermo.png";
import wsp from "../img/wsp.png";
import tel from "../img/tel.png";
import mail from "../img/mail.png";
export default function Map() {
  return (
    <div className="bg-base lg:w-[100vw] grid grid-cols-2 lg:gap-0 text-base font-title lg:h-72">
      <img
        src={palermo}
        alt="pal"
        className="lg:h-auto w-[100vw] hidden lg:block lg:w-[50vw]"
      />
      <section className="bg-darkBlue lg:w-[50vw] leading-3 flex justify-center flex-col items-center">
        <h3 className="text-md">Por urgencias contactarse : </h3>
        <p className="leading-3 flex items-center">
          <img src={wsp} alt="wsp" className="lg:h-4 lg:mx-1" />
          <img src={tel} alt="tel" className="lg:h-4 lg:ml-1 mr-2 " />+ 54 9
          (11) 6187-9552 (Argentina)
        </p>
        <p className="leading-3 flex items-center">
          <img src={wsp} alt="wsp" className="lg:h-4 lg:lg:mx-1" />
          <img src={tel} alt="tel" className="lg:h-4 lg:ml-1 mr-2 " />
          +1 (437) 858 2301 (Exterior)
        </p>
        <p className="leading-3 flex items-center">
          <img src={mail} alt="mail" className="lg:h-4 lg:lg:mx-2" />
          malmglerner@gmail.com
        </p>
      </section>
    </div>
  );
}
