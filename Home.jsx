import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
import Trajectory from "../trajectory/Trajectory";
export default function Areas() {
  return (
    <div>
      <Outlet />
      <Landing />
      <Trajectory />
    </div>
  );
}
