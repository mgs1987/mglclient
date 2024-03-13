import { useTranslation } from "react-i18next";
import Penal from "../img/Penal.png";
import Const from "../img/Const.png";
import Internat from "../img/Internac.png";

export default function Areas() {
  const { t } = useTranslation();
  return (
    <div className="font-title text-darkBlue flex flex-col justify-center items-center mt-16 xs:mr-4">
      <h1 className="s:text-3xl xs:text-2xl">{t("practiceareas")}</h1>
      <div className="flex justify-center items-center flex-col ">
        <section className="lg:h-76  bg-darkBlue text-white p-6 m-2 md:py-3 flex flex-row w-[65vw] xs:h-16 s:h-16">
          <img src={Penal} alt={"item"} className="bg-white h-16 w-auto" />
          <section className="flex flex-col items-align justify-center m-6 ">
            <h2 className="">Derecho Penal</h2>
            <p className="lg:h-20 text-justify xs:hidden s:hidden">
              Tenemos un enfoque dedicado en el ámbito penal cambiario, penal
              tributario, aduanero, responsabilidad empresarial, anticorrupción,
              estafas e investigaciones complejas, lavado de dinero, así como en
              faltas y contravenciones en la Ciudad Autónoma de Buenos Aires
              (CABA), ofrecemos a nuestros clientes una asesoría integral y
              experta en cada una de estas áreas.{" "}
            </p>
          </section>
        </section>
        <section className="h-76 border-solid p-6 m-2 flex flex-row md:py-3 w-[65vw] xs:h-16 s:h-16">
          <img src={Const} alt={"item"} className="bg-white h-16 w-auto" />
          <section className="flex flex-col items-align justify-center m-6">
            <h2>Derecho Contitucional</h2>
            <p className="lg:h-20 text-justify xs:hidden s:hidden">
              Ofrecemos asesoramiento legal experto en todas las áreas
              relacionadas con la Constitución, asegurando que nuestros clientes
              reciban la mejor representación y{" "}
              <span className="font-bold">
                defensa de sus derechos fundamentales.
              </span>{" "}
              Ya sea en casos de interpretación constitucional, protección de
              derechos individuales, litigios constitucionales o cualquier otro
              asunto relacionado con la Carta Magna.
            </p>
          </section>
        </section>
        <section className="h-76  bg-darkBlue text-white p-6 m-2 flex md:py-3 flex-row w-[65vw] xs:h-16 s:h-16">
          <img src={Internat} alt={"item"} className="bg-white h-16 w-auto" />
          <section className="flex flex-col items-align justify-center m-6">
            <h2>Derecho Internacional</h2>
            <p className="lg:h-20 text-justify xs:hidden s:hidden">
              Nos especializamos en Derecho Internacional Público y Litigios
              Internacionales. Nos dedicamos a proporcionar asesoramiento legal
              de primer nivel en todas las áreas relacionadas con el derecho
              internacional, incluyendo litigios transfronterizos, tratados
              internacionales, derechos humanos internacionales, derecho
              diplomático y más
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
