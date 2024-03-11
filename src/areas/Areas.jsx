import { useTranslation } from "react-i18next";
import { INFO } from "../info/info";
export default function Areas() {
  const { t } = useTranslation();
  return (
    <div className="font-title text-darkBlue flex flex-col justify-center items-center">
      <h1>{t("practiceareas")}</h1>
      <div className=" flex justify-center items-center flex-col w-[65vw]">
        {INFO.map((i, index) => {
          return (
            <section
              key={i.especiality}
              className={`${
                index % 2 === 0
                  ? "bg-darkBlue && text-white"
                  : "bg-white && text-darkBlue"
              } h-76`}
            >
              <img src={i.img} alt={"item"} />
              <h2>{i.especiality}</h2>
              <p className="h-20">{i.description}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
