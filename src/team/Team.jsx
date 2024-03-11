import CardPerson from "../cardPerson/CardPerson";
import img1 from "../img/guillermo.png";
import img2 from "../img/pedro.png";
import { useTranslation } from "react-i18next";
const MEMBERS = ["GUILLERMO MALM GREEN", "PEDRO MALM GREEN"];
const TEXT = [
  "Es socio del Estudio Jurídico Brons & Salas, desde el año 1997. Miembro del Consejo Directivo del Estudio. Se graduó como abogado con Diploma de Honor de la Universidad de Buenos Aires en 1989. Asimismo, cursó estudios sobre International Environmental Law, en la Southwestern University School of Law. En 1994, asistió a la Academy of American and International Law, Center for American and International Law en la Universidad de Texas, Dallas. También ha sido Allen & Overy alumno en los años 1998-1999. En 2018, realizó estudios en Harvard Law School relacionados con leadership en estudios jurídicos.",
  "Cuenta con más de 10 años de experiencia en la Justicia Federal y en la Justicia Nacional en lo Criminal y Correccional de la Capital Federal, donde transitó por todos los cargos de la carrera judicial hasta ocupar el rol de Secretario de Juzgado. Se graduó como abogado con Diploma de Honor de la Universidad de Buenos Aires, y es Magíster en Políticas Públicas por la Universidad Torcuato Di Tella. Ha sido Docente Adjunto de la materia Derecho Penal y Procesal Penal del Instituto Universitario de Seguridad de la Ciudad y Docente Ayudante de la materia Derecho Internacional de los Derechos Humanos de la Universidad de Buenos Aires.",
];

export default function Team() {
  const { t } = useTranslation();
  return (
    <div className="p-20 flex justify-center flex-col ">
      <h1 className=" mx-auto mb-10 font-title text-darkBlue font-bold flex ">
        {t("ourteam")}
      </h1>
      <div className="m-auto grid grid-cols-3 gap-8">
        <CardPerson img={img2} name={MEMBERS[1]} description={TEXT[1]} />
        <CardPerson img={img1} name={MEMBERS[0]} description={TEXT[0]} />
        <CardPerson img={img2} name={MEMBERS[1]} description={TEXT[1]} />
      </div>
    </div>
  );
}
