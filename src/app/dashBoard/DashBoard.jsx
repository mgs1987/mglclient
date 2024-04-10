import { useState, useEffect } from "react";
import Form from "../../Form/Form";
import PartnersList from "../../PartnersList/PartnersList";
import axios from "axios";
import Loading from "../../loading/Loading";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const MEMBERS = import.meta.env.VITE_POST_MEMBER;
  const [loading, setLoading] = useState(true);
  const [partner, setPartner] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(MEMBERS)
      .then((resp) => setPartner(resp.data))
      .then(() => setLoading(false))
      .catch((e) => console.log(e));
  }, []);
  // console.log("hola mundo");
  // console.log("hola mundo");
  // console.log("hola mundo");
  // console.log("hola mundo");
  // console.log("hola mundo");
  // console.log("hola mundo");
  // console.log("hola mundo");

  return (
    <>
      <div className="mt-12 text-center flex justify-center max-w-screen-2xl lg:w-[100vw]">
        <Form partner={partner} setPartner={setPartner} data={data} />
        {loading ? (
          <Loading />
        ) : (
          <PartnersList partner={partner} setData={setData} />
        )}
      </div>
      <div className="flex justify-center items-center flex-col">
        <Link to="/contactlist">
          <button className="bg-darkBlue text-base w-40">
            VER LISTADO DE CONTACTOS
          </button>
        </Link>
      </div>
    </>
  );
};

export default DashBoard;
