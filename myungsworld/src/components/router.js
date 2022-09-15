import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../router/home";
import Auth from "../router/auth";

function AppRouter(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            {props.isLoggedIn ? (
              <Route path="/" element={<Home></Home>}></Route>
            ) : (
              <Route path="/" element={<Auth></Auth>}></Route>
            )}
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
