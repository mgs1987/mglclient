import React from "react";
import linked from "../img/linkedin.png";
import insta from "../img/instagram.png";
const CardPerson = ({ img, name }) => {
  return (
    <div className="flex justify-center flex-col">
      <img
        className="m-auto h-96 flex justify-center"
        src={img}
        alt="persona"
      />
      <h2 className="flex justify-center">{name}</h2>
      <span className=" text-lg flex justify-center">Socio</span>
      <div className="flex justify-center">
        <img className="size-8 m-2" src={linked} alt="linkedIn" />
        <img className="size-8 m-2" src={insta} alt="instagram" />
      </div>
    </div>
  );
};

export default CardPerson;
