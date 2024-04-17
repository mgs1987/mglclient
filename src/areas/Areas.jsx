import { useTranslation } from "react-i18next";
import Penal from "../img/whitepenal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";
import ButtonAreas from "./ButtonAreas";

export default function Areas() {
  const { t } = useTranslation();
  return (
    <div className="font-title text-darkBlue flex flex-col justify-center items-center xs:mr-2 bg-base lg:pt-40 md:py-20 sm:py-20 s:pt-20 s:pb-20 xs:pt-20 xs:pb-20 ">
      <h1 className="s:text-[42px] xs:text-[41px] font-semibold lg:text-5xl md:text-5xl pb-[60px] p-0 sm:text-5xl sm:text-center sm:pb-[45px]">
        {t("practiceareas")}
      </h1>
      <div className="lg:hidden md:hidden sm:hidden s:block xs:block">
        <ButtonAreas />
      </div>
      <div className="xs:hidden s:hidden lg:block md:block flex justify-center items-center flex-col max-w-screen-lg ">
        <section className="xs:hidden s:hidden lg:h-76 bg-darkBlue text-white lg:m-2 lg:py-[50px] lg:px-[20px] mx-2 md:py-3 md:my-4 sm:py-3 sm:my-4 flex flex-row lg:w-[70vw] md:w-[80vw] sm:w-[80vw] rounded-md max-w-screen-lg">
          <img
            src={Penal}
            alt={"item"}
            className="md:h-16 md:my-2 md:ml-6 xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6 sm:h-16 sm:my-2 sm:ml-6"
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:ml-7 md:mr-12  sm:ml-7 sm:mr-12">
            <h2 className="lg:my-4 font-medium lg:text-4xl md:text-3xl sm:text-3xl">
              {t("DP")}
            </h2>

            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light sm:tracking-wider">
              {t("DPDescription")}
            </p>
          </section>
        </section>
        <section className="lg:h-76 bg-white text-darkBlue lg:mt-[20px] lg:py-[50px] lg:px-[20px] m-2 md:py-3 flex flex-row lg:w-[70vw] md:w-[80vw] sm:w-[80vw] shadow-sha rounded-md max-w-screen-lg">
          <section className="flex flex-col items-end justify-end lg:mx-6 md:mr-7 md:ml-12 md:my-4 sm:mr-7 sm:ml-12 sm:my-4 ">
            <h2 className="lg:my-4 font-medium lg:text-4xl md:text-3xl sm:text-3xl">
              {t("DC")}
            </h2>
            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light sm:tracking-wider">
              {t("DCDescription")}
            </p>
          </section>
          <img
            src={Const}
            alt={"item"}
            className="md:h-16 md:my-2 md:mr-6 xs:h-9 xs:py-7 xs:px-6 s:h-10 s:px-2 s:py-6 sm:h-16 sm:my-4  sm:mx-6"
          />
        </section>
        <section className="lg:h-76 md:my-4 sm:my-4 bg-darkBlue text-white lg:mt-[20px] lg:py-[50px] lg:px-[20px] m-2 md:py-3 flex flex-row lg:w-[70vw] md:w-[80vw] rounded-md max-w-screen-lg sm:py-3 sm:w-[80vw]">
          <img
            src={Internat}
            alt={"item"}
            className="md:h-16 md:my-2 md:ml-6 xs:h-9 sm:h-16 sm:my-2 sm:ml-6"
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:ml-7 md:mr-12 sm:ml-7 sm:mr-12">
            <h2 className="lg:my-4 font-medium lg:text-4xl md:text-3xl sm:text-3xl">
              {t("DI")}
            </h2>
            <p className="text-justify xs:hidden s:hidden lg:leading-6 font-light sm:tracking-wider">
              {t("DIDescription")}
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
