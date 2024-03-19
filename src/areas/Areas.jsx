import { useTranslation } from "react-i18next";
import Penal from "../img/whitepenal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";

export default function Areas() {
  const { t } = useTranslation();
  return (
    <div className="font-title text-darkBlue flex flex-col justify-center items-center xs:mr-4 bg-base">
      <h1 className="s:text-3xl xs:text-2xl">{t("practiceareas")}</h1>
      <div className="flex justify-center items-center flex-col ">
        <section className="lg:h-76 bg-darkBlue text-white p-6 m-2 md:py-3 flex flex-row w-[65vw] xs:h-16 s:h-16">
          <img
            src={Penal}
            alt={"item"}
            className="h-16 w-auto s:h-12 md:m-2 xs:h-10 xs:p-1"
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:mx-5">
            <h2 className="s:mx-6 s:text-md xs:mx-3">{t("DP")}</h2>
            <p className="text-justify xs:hidden s:hidden">
              {t("DPDescription")}
            </p>
          </section>
        </section>
        <section className="lg:h-76  p-6 m-2 flex flex-row md:py-3 w-[65vw] xs:h-16 s:h-16 shadow-xl">
          <section className="flex flex-col items-end justify-end lg:mx-6 md:mx-5 ">
            <h2 className="s:mx-6 s:text-md xs:mx-3">{t("DC")}</h2>
            <p className="text-justify xs:hidden s:hidden">
              {t("DCDescription")}
            </p>
          </section>
          <img
            src={Const}
            alt={"item"}
            className="h-16 w-auto s:h-12 md:m-4 xs:h-10 xs:p-1"
          />
        </section>
        <section className="lg:h-76  bg-darkBlue text-white p-6 m-2 flex md:py-3 flex-row w-[65vw] xs:h-16 s:h-16">
          <img
            src={Internat}
            alt={"item"}
            className="h-12 w-12 s:h-10 md:m-2 md:px-2 xs:h-10 xs:p-1 "
          />
          <section className="flex flex-col items-start justify-center lg:mx-6 md:mx-5">
            <h2 className="s:mx-5 s:text-md xs:mx-3">{t("DI")}</h2>
            <p className="text-justify xs:hidden s:hidden">
              {t("DIDescription")}
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
