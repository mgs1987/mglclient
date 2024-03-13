import banner from "../img/banner.png";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-darkBlue font-title">
        <section className="flex justify-center">
          <img src={banner} className="w-[100vw] h-auto" />
        </section>
        <section className="lg:p-20 flex flex-col md:p-6 xs:px-10 xs:py-3 s:py-2 s:px-8 lg:text-lg text-sm md:text-lg ">
          <p className="text-center tracking-wide ">
            <span className="font-bold">Malm Green & Lerner</span>
            {t("landingP1")}
          </p>
          <p className="text-center tracking-wide ">{t("landingP2")}</p>
        </section>
      </div>
    </>
  );
}
