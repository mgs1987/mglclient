import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="static bottom-0  bg-cover bg-base p-10 flex justify-end">
        <button
          onClick={() => navigate("/home/login")}
          className="rounded-md flex justify-center border-transparent bg-base w-fit px-4 py-2 m-2 text-darkBlue font-bold  hover:bg-gray-300 cursor-pointer "
        >
          ADMIN
        </button>
      </div>
    </>
  );
}
