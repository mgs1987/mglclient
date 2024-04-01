import { useState, useEffect } from "react";
import Form from "../../Form/Form";
import PartnersList from "../../PartnersList/PartnersList";
import axios from "axios";

const DashBoard = () => {
  const [partner, setPartner] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-mgl.onrender.com/partner")
      .then((resp) => setPartner(resp.data))
      .catch((e) => console.log(e));
  }, []);
  /* console.log(data); */
  return (
    <div className="mt-12 md:flex text-center">
      <Form partner={partner} setPartner={setPartner} data={data} />
      <PartnersList partner={partner} setData={setData} />
    </div>
  );
};

export default DashBoard;
