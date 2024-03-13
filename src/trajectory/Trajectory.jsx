import { useTranslation } from "react-i18next";
const Trajectory = () => {
  const { t } = useTranslation();
  return (
    <div className="m-auto px-20 py-10 max-w-screen-xl flex-row justify-center bg-darkBlue text-white font-title ">
      <h1 className="m-auto flex justify-center xs:text-base xs:tracking-wide s:text-xl">
        {t("ourtrajectory")}
      </h1>
      <section className="flex-row text-center lg:tracking-wide lg:text-md xs:text-xs xs:text-justify">
        <p className="">{t("ourtrajectoryText1")}</p>
        <p className="xs:hidden s:hidden">{t("ourtrajectoryText2")}</p>
        <p className="xs:hidden s:hidden sm:hidden">
          {t("ourtrajectoryText3")}
        </p>
      </section>
    </div>
  );
};

export default Trajectory;
