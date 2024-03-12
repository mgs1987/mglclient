import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
import Trajectory from "../trajectory/Trajectory";
import Team from "../team/Team";
import Contactus from "../contactus/Contactus";
import Areas from "../areas/Areas";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div className="w-screen">
      <Outlet />
      <Landing />
      <Trajectory />
      <Team />
      <Areas />
      <Contactus />
    </div>
  );
}
