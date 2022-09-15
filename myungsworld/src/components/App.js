import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { authService } from "../firebase";
import AppRouter from "./router";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("-----");
      console.log(user);
      console.log("-----");
      if (user) {
        console.log("히히");
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        console.log(init);
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
