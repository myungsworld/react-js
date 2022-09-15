import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../router/home";
import Auth from "../router/auth";

function AppRouter(isLoggedIn) {
  console.log(isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            {isLoggedIn ? (
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
