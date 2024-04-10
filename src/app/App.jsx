import { Suspense } from "react";
import "./App.css";
import Home from "../home/Home";
import Areas from "../areas/Areas";
import Team from "../team/Team";
import Wrapper from "../wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import Contactus from "../contactus/Contactus";
import "../i18n";
import Login from "../Login/Login";
import DashBoard from "./dashBoard/DashBoard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import ContactList from "../contactList/ContactList";

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route exact path="team" element={<Team />} />
            <Route exact path="contactus" element={<Contactus />} />
            <Route exact path="areas" element={<Areas />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="login/dashboard" element={<DashBoard />} />
            <Route exact path="login/contactlist" element={<ContactList />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
