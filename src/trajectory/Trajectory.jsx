import { useTranslation } from "react-i18next";
export default function Trajectory() {
  const { t } = useTranslation();
  return (
    <div className="lg:flex lg:flex-col lg:justify-center md:py-40 sm:py-40 s:px-16 s:py-32 xs:px-12 xs:py-28 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center bg-base text-darkBlue font-title lg:w-[100vw]">
      <div className="lg:w-[70vw] lg:px-10">
        <h1 className="font-semibold text-5xl lg:pb-[3.75rem] lg:mb-0 text-center">
          {t("ourtrajectory")}
        </h1>
        <section className="lg:px-10 text-center tracking-wide lg:text-lg xs:text-lg s:text-lg md:text-2xl sm:text-xl">
          <p className="leading-8 lg:px-0 sm:px-20 text-xl lg:tracking-wider">
            {t("ourtrajectoryText2")}
          </p>
        </section>
      </div>
    </div>
  );
}
