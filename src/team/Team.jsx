import CardPerson from "../cardPerson/CardPerson";
import img1 from "../img/guillermo.png";
import img2 from "../img/pedro.png";

const MEMBERS = ["GUILLERMO MALM GREEN", "PEDRO MALM GREEN"];

export default function Team() {
  return (
    <div className="p-20 flex justify-center flex-col ">
      <h1 className=" mx-auto mb-10 font-title text-darkBlue font-bold flex ">
        NUESTRO EQUIPO
      </h1>
      <div className="m-auto grid grid-cols-3 gap-4">
        <CardPerson img={img2} name={MEMBERS[1]} />
        <CardPerson img={img1} name={MEMBERS[0]} />
        <CardPerson img={img2} name={MEMBERS[1]} />
      </div>
    </div>
  );
}
