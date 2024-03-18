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
        <article className="lg:p-20 bg-darkBlue flex flex-col md:p-10 s:p-9 xs:p-8">
          <p className="text-center whitespace-pre-line text-base text-xl lg:p-10 p-6 s:text-md xs:text-sm">
            <span className="font-bold text-base text-xl s:text-md xs:text-sm">
              Malm Green & Lerner Abogados
            </span>
            {t("landingP1")}
          </p>
        </article>
      </div>
    </>
  );
}
