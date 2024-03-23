import CardPerson from "../cardPerson/CardPerson";
import img1 from "../img/guillermo.png";
import img2 from "../img/peter.png";
import img3 from "../img/martin.png";
import { useTranslation } from "react-i18next";
const MEMBERS = ["Guillermo Malm Green", "Pedro Malm Green", "Martin Lerner"];
const TEXT = [
  "Es socio del Estudio Jurídico Brons & Salas, desde el año 1997. Miembro del Consejo Directivo del Estudio. Se graduó como abogado con Diploma de Honor de la Universidad de Buenos Aires en 1989. Asimismo, cursó estudios sobre International Environmental Law, en la Southwestern University School of Law. En 1994, asistió a la Academy of American and International Law, Center for American and International Law en la Universidad de Texas, Dallas. También ha sido Allen & Overy alumno en los años 1998-1999. En 2018, realizó estudios en Harvard Law School relacionados con leadership en estudios jurídicos.",
  "Cuenta con más de 10 años de experiencia en la Justicia Federal y en la Justicia Nacional en lo Criminal y Correccional de la Capital Federal, donde transitó por todos los cargos de la carrera judicial hasta ocupar el rol de Secretario de Juzgado. Se graduó como abogado con Diploma de Honor de la Universidad de Buenos Aires, y es Magíster en Políticas Públicas por la Universidad Torcuato Di Tella. Ha sido Docente Adjunto de la materia Derecho Penal y Procesal Penal del Instituto Universitario de Seguridad de la Ciudad y Docente Ayudante de la materia Derecho Internacional de los Derechos Humanos de la Universidad de Buenos Aires.",
  "Martin Lerner es Abogado especializado en Derecho Penal (Universidad de Palermo) y Médico cirujano (Universidad de Buenos Aires) especialista en Medicina Legal. Es Jefe de División Jurídico-Pericial Hospital de Clínicas “José de San Martín” y Jefe de Equipo Médicos Legistas de las UFI Descentralizadas Distrito Pilar. Además, se encuentra cursando una Maestría en Derecho Penal (Universidad de Palermo) y ha participado como perito oficial en numerosos casos ante la Justicia Nacional en lo Civil, Criminal y Correccional, Laboral, y Comercial.",
];

export default function Team() {
  const { t } = useTranslation();
  return (
    <div className="md:px-16 flex justify-center items-center flex-col font-title bg-base">
      <h1 className="mb-10 font-title text-darkBlue flex font-semibold text-5xl ">
        {t("ourteam")}
      </h1>
      <div className="xs:mr-6 grid lg:grid-cols-3 lg:gap-8 md:grid-cols-2 justify-items-center md:gap-24 xs:grid-cols-1 s:grid-cols-1 s:gap-24 xs:gap-24">
        <CardPerson img={img2} name={MEMBERS[1]} description={TEXT[1]} />
        <CardPerson img={img1} name={MEMBERS[0]} description={TEXT[0]} />
        <CardPerson img={img3} name={MEMBERS[2]} description={TEXT[2]} />
      </div>
    </div>
  );
}
