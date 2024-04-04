import { useEffect } from "react";
import Partners from "../Partners/Partners";

// eslint-disable-next-line react/prop-types
const PartnersList = ({ partner, setData }) => {
  useEffect(() => {
    console.log(partner); // SI aparece en consola
  }, [partner, setData]);

  return (
    <div className="font-title md:w-1/2 lg:w-4/5 md:h-screen overflow-y-scroll h-max m-5">
      {partner && partner.length ? (
        <>
          <h2 className="font-black text-2xl">Listado de Socios</h2>
          <p className="text-l mt-5 text-center mb-2">
            Administra los{" "}
            <span className="text-darkBlue font-bold">Socios</span>
          </p>
          {partner &&
            partner.map((per) => {
              return (
                <Partners
                  key={per.partner_id}
                  per={per}
                  setData={setData}
                  partner={partner}
                />
              );
            })}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl">No hay Socios</h2>
        </>
      )}
    </div>
  );
};

export default PartnersList;
