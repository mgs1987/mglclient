import banner from "../img/banner.png";
export default function Landing() {
  return (
    <>
      <div>
        <section className=" flex justify-center">
          <img src={banner} className="" />
        </section>
        <section className="p-20 flex flex-col">
          <p className="text-center text-darkBlue font-title tracking-wide text-lg">
            <span className="font-bold">Malm Green & Lerner</span> surge como un
            referente en el ámbito legal, combinando <br />
            su experiencia judicial, conocimientos académicos y una sólida red
            de <br />
            contactos para ofrecer a sus clientes servicios legales de calidad y
            <br />
            asesoramiento estratégico.
            <br />
          </p>
          <p className="text-center text-darkBlue font-title tracking-wide text-lg">
            La firma se destaca por su compromiso con la excelencia, la ética
            profesional y <br />
            la defensa efectiva de los intereses de sus clientes, consolidándose
            como una <br />
            opción confiable y confiable en el panorama jurídico actual.
          </p>
        </section>
      </div>
    </>
  );
}
