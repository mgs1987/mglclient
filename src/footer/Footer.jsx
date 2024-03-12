import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cover bg-darkBlue p-10 flex justify-end">
        <button
          onClick={() => navigate("/home/form")}
          className="px-2 py-1 bg-base border-transparent"
        >
          ADMIN
        </button>
      </div>
    </>
  );
}
