import { useState, useEffect } from "react";
import Form from "../../Form/Form";
import PartnersList from "../../PartnersList/PartnersList";
import axios from "axios";
import Loading from "../../loading/Loading";

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
  /* console.log(data); */
  return (
    <div className="mt-12 md:flex text-center">
      <Form partner={partner} setPartner={setPartner} data={data} />
      {loading ? (
        <Loading />
      ) : (
        <PartnersList partner={partner} setData={setData} />
      )}
    </div>
  );
};

export default DashBoard;
