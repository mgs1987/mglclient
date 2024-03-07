import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
import Trajectory from "../trajectory/Trajectory";
import Team from "../team/Team";
import Contactus from "../contactus/Contactus";

export default function Areas() {
  return (
    <div className="w-screen">
      <Outlet />
      <Landing />
      <Trajectory />
      <Team />
      <Contactus />
    </div>
  );
}
