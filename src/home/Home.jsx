import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
import Trajectory from "../trajectory/Trajectory";
import Team from "../team/Team";
import Contactus from "../contactus/Contactus";
import Areas from "../areas/Areas";
import Map from "../map/Map";
export default function Home() {
  return (
    <div className="w-screen">
      <Outlet />
      <div id="landing">
        <Landing />
      </div>
      <Trajectory />
      <div id="team">
        <Team />
      </div>
      <div id="areas">
        <Areas />
      </div>
      <div id="contactus">
        <Contactus />
      </div>
      <Map />
    </div>
  );
}
