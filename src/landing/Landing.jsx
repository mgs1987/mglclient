import banner from "../img/banner.png";
import { useTranslation } from "react-i18next";
export default function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <section className=" flex justify-center">
          <img src={banner} className="" />
        </section>
        <section className="p-20 flex flex-col">
          <p className="text-center text-darkBlue font-title tracking-wide text-lg">
            <span className="font-bold">Malm Green & Lerner</span>
            {t("landingP1")}
          </p>
          <p className="text-center text-darkBlue font-title tracking-wide text-lg">
            {t("landingP2")}
          </p>
        </section>
      </div>
    </>
  );
}
