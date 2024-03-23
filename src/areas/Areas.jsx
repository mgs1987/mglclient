import { useTranslation } from "react-i18next";
import Penal from "../img/whitepenal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";

export default function Areas() {
  const { t } = useTranslation();
  return (
    <div className="font-title text-darkBlue flex flex-col justify-center items-center xs:mr-4 bg-base lg:pt-40 md:pt-36 s:pt-32 xs:pt-32 s:py-8">
      <h1 className="s:text-3xl xs:text-3xl font-semibold lg:text-5xl">
        {t("practiceareas")}
      </h1>
      <div className="flex justify-center items-center flex-col ">
        <section className="xs:h-28 xs:w-[80vw] s:p-3 s:w-[65vw] s:h-24 lg:h-76 bg-darkBlue text-white lg:m-2 lg:py-[50px] lg:px-[20px] m-2 md:py-3 flex flex-row lg:w-[65vw] md:w-[80vw] rounded-md">
          <img
            src={Penal}
            alt={"item"}
            className="md:h-16 md:my-2 md:ml-6 xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6"
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:ml-7 md:mr-12">
            <h2 className="lg:my-4 s:mx-6 s:text-md xs:mx-3 font-medium lg:text-4xl md:text-3xl">
              {t("DP")}
            </h2>
            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light">
              {t("DPDescription")}
            </p>
          </section>
        </section>
        <section className="xs:text-center xs:h-26 xs:w-[80vw] s:my-5 s:p-3 s:w-[65vw] s:h-24 lg:h-76 bg-white text-darkBlue lg:m-2 lg:py-[50px] lg:px-[20px] m-2 md:py-3 flex flex-row lg:w-[65vw] md:w-[80vw] shadow-sha rounded-md">
          <section className="flex flex-col items-end justify-end lg:mx-6 md:mr-7 md:ml-12">
            <h2 className="s:text-center lg:my-5 s:text-md xs:mx-3 s:mx-6 s:text-md font-medium md:text-3xl lg:text-4xl">
              {t("DC")}
            </h2>
            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light">
              {t("DCDescription")}
            </p>
          </section>
          <img
            src={Const}
            alt={"item"}
            className="md:h-16 md:my-2 md:mr-6 xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6"
          />
        </section>
        <section className="xs:h-26 xs:w-[80vw] s:h-24 s:p-3 s:w-[65vw] lg:h-76 bg-darkBlue text-white lg:m-2 lg:py-[50px] lg:px-[20px] m-2 md:py-3 flex flex-row lg:w-[65vw] md:w-[80vw] rounded-md">
          <img
            src={Internat}
            alt={"item"}
            className="md:h-16 md:my-2 md:ml-6 xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6"
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:ml-7 md:mr-12">
            <h2 className="lg:my-4 s:mx-6 s:text-md xs:mx-3 font-medium lg:text-4xl md:text-3xl">
              {t("DI")}
            </h2>
            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light">
              {t("DIDescription")}
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
