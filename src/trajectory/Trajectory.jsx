import { useTranslation } from "react-i18next";
export default function Trajectory() {
  const { t } = useTranslation();
  return (
    <div className="md:px-28 md:py-40 sm:px-28 sm:py-40 s:px-16 s:py-32 xs:px-12 xs:py-28 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center bg-base text-darkBlue font-title">
      <h1 className="font-semibold text-5xl text-center lg:pb-[3.75rem] lg:mb-0">
        {t("ourtrajectory")}
      </h1>
      <section className="flex-row text-center tracking-wide lg:text-lg xs:text-lg s:text-lg md:text-2xl sm:text-xl">
        <p className="text-2xl leading-9">{t("ourtrajectoryText2")}</p>
      </section>
    </div>
  );
}
