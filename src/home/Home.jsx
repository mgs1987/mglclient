import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
import Trajectory from "../trajectory/Trajectory";
import Team from "../team/Team";

export default function Areas() {
  return (
    <div className="max-w-full">
      <Outlet />
      <Landing />
      <Trajectory />
      <Team />
    </div>
  );
}
