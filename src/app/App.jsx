import { Suspense } from "react";
import "./App.css";
import Home from "../home/Home";
import Areas from "../areas/Areas";
import Team from "../team/Team";
import Wrapper from "../wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
import Contactus from "../contactus/Contactus";
import Form from "../Form/Form";
function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Routes>
          <Route exact path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/areas" element={<Areas />} />
            <Route exact path="/home/form" element={<Form />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
