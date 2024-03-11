import CardPerson from "../cardPerson/CardPerson";
import img1 from "../img/guillermo.png";
import img2 from "../img/pedro.png";
import { useTranslation } from "react-i18next";
const MEMBERS = ["GUILLERMO MALM GREEN", "PEDRO MALM GREEN"];

export default function Team() {
  const { t } = useTranslation();
  return (
    <div className="p-20 flex justify-center flex-col ">
      <h1 className=" mx-auto mb-10 font-title text-darkBlue font-bold flex ">
        {t("ourteam")}
      </h1>
      <div className="m-auto grid grid-cols-3 gap-4">
        <CardPerson img={img2} name={MEMBERS[1]} />
        <CardPerson img={img1} name={MEMBERS[0]} />
        <CardPerson img={img2} name={MEMBERS[1]} />
      </div>
    </div>
  );
}
