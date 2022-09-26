import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../router/home";
import Auth from "../router/auth";
import Navigation from "./navigation";
import Profile from "../router/profile";
function AppRouter(props) {
  return (
    <>
      <BrowserRouter>
        {props.isLoggedIn && <Navigation />}
        <Routes>
          <>
            {props.isLoggedIn ? (
              <>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
              </>
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
