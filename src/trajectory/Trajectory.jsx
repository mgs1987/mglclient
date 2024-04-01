import { useTranslation } from "react-i18next";
const Trajectory = () => {
  const { t } = useTranslation();
  return (
    <div className="md:px-40 s:px-20 xs:px-14 md:py-28 s:py-20 xs:py-16 lg:py-40 flex flex-col justify-center items-center bg-base text-darkBlue font-title">
      <h1 className="font-semibold text-5xl text-center">
        {t("ourtrajectory")}
      </h1>
      <section className="flex-row text-center tracking-wide lg:text-lg xs:text-md">
        <p className="">{t("ourtrajectoryText1")}</p>
        <p className="">{t("ourtrajectoryText2")}</p>
      </section>
    </div>
  );
};

export default Trajectory;
