import { useTranslation } from "react-i18next";
const Trajectory = () => {
  const { t } = useTranslation();
  return (
    <div className="m-auto md:px-40 s:px-20 xs:px-12 md:py-16 s:py-12 xs:py-12 lg:py-40 max-w-screen-xl flex-row justify-center bg-base text-darkBlue font-title ">
      <h1 className="m-auto flex justify-center s:text-medium xs:text-less">
        {t("ourtrajectory")}
      </h1>
      <section className="flex-row text-center tracking-wide lg:text-md xs:text-md">
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
