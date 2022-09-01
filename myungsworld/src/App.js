import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Korail from "./router/korail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL}
            element={<Korail></Korail>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
