export default function Contactus() {
  return (
    <>
      <div className="bg-darkBlue lg:align-center text-white font-pop font-bold lg:h-28 lg:text-2xl flex justify-center"></div>
      <h1 className=" font-title text-darkBlue font-bold flex justify-center">
        CONTÁCTANOS
      </h1>
      <h1 className="text-zinc-400 flex justify-center lg:p-10 text-xs md:text-xl mt-6 mb-4">
        Completá el formulario y nos pondremos en contacto con vos
      </h1>
      <form id="contact-form" className="flex flex-col lg:ml-80 px-4 lg:p-0">
        <div className="flex flex-row lg:w-2/3 md:w-[70vw] py-4 lg:p-0">
          <input
            className="lg:w-full lg:h-[50px] border lg:m-0.5 border-darkBlue lg:rounded-2xl md:rounded-xl rounded-xl mr-1 "
            placeholder="Nombre completo"
            type="text"
            name="user_name"
          />
          <input
            className="lg:w-full lg:h-[50px] lg:m-0.5 border  border-darkBlue  lg:rounded-2xl md:rounded-xl rounded-xl"
            placeholder=" Email..."
            type="text"
            name="user_email"
          />
        </div>
        <input
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 border border-darkBlue  lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder=" Asunto"
          type="text"
          name="subject"
        />
        <textarea
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2  lg:ml-0 border  border-darkBlue  rounded-2xl mt-3 p-4 lg:mt-0 lg:p-0 lg:py-10"
          placeholder=" Tu consulta"
          type="message"
        ></textarea>
        <section className="flex lg:justify-end justify-center lg:w-2/3 lg:mt-10 mt-5">
          <button
            className="border border-blue-950 rounded-2xl bg-darkBlue text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10 mb-4 py-2 px-4"
            type="submit"
          >
            Send
          </button>
        </section>
      </form>
    </>
  );
}
