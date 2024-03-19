import { useState } from "react";
import Form from "../../Form/Form";
import PartnersList from "../../PartnersList/PartnersList";

const DashBoard = () => {
  const [partner, setPartner] = useState([]);
  const [data, setData] = useState({});

  return (
    <div className="mt-12 md:flex text-center">
      <Form partner={partner} setPartner={setPartner} data={data} />
      <PartnersList partner={partner} setData={setData} />
    </div>
  );
};

export default DashBoard;
