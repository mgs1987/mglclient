import "./App.css";
import Home from "../home/Home";
import Wrapper from "../wrapper/Wrapper";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
