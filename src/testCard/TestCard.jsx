import img2 from "../img/pedro.png";
import linked from "../img/linkedin.png";
import insta from "../img/instagram.png";

const TestCard = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-100">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 shadow-xl shadow-slate-500/40">
            <img
              className="h-full w-full object-cover "
              src={img2}
              alt="foto"
            />
            <h3 className="flex justify-center">name</h3>
            <span className=" text-lg flex justify-center">Socio</span>
          </div>
          <div className="absolute inset-0 h-full w-full bg-darkBlue/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col justify-center bg-base">
              <div className=" static flex justify-center pb-2">
                <img className="size-8 m-2" src={linked} alt="linkedIn" />
                <img className="size-8 m-2" src={insta} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
