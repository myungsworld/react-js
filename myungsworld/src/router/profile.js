import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const onClickLogOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <>
      <button onClick={onClickLogOut}>Sign out</button>
    </>
  );
}

export default Profile;
