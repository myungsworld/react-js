import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const auth = getAuth();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      console.log(auth.currentUser);
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickGoogle = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;

    try {
      provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={onChange}
          />
        </p>
        <p>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
        </p>
        <p>
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Log In"}
          />
        </p>
      </form>
      <button onClick={onClickGoogle} name="google">
        Continue with google
      </button>
    </div>
  );
};
export default Auth;
