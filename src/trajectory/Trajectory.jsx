import { useTranslation } from "react-i18next";
const Trajectory = () => {
  const { t } = useTranslation();
  return (
    <div className=" m-auto px-20 py-10 max-w-screen-xl flex-row justify-center bg-darkBlue text-white">
      <h1 className="m-auto flex justify-center font-title">
        {t("ourtrajectory")}
      </h1>
      <section className="flex-row text-center font-title tracking-wide text-lg">
        <p>{t("ourtrajectoryText1")}</p>
        <p>{t("ourtrajectoryText2")}</p>
        <p>{t("ourtrajectoryText3")}</p>
      </section>
    </div>
  );
};

export default Trajectory;
