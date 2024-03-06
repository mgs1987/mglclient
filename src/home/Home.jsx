import { Outlet } from "react-router-dom";
import Landing from "../landing/Landing";
export default function Areas() {
  return (
    <div>
      <Outlet />
      <Landing />
    </div>
  );
}
