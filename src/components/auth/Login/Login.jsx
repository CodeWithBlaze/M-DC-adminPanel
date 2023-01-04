import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth, signInWithEmailAndPassword } from "../../../firebase/config";

export const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // here we will call the backend and get the token and role of the user

    let user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    localStorage.setItem(
      "dcuser",
      JSON.stringify({ token: user.user.accessToken })
    );

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-inputs">
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" onChange={(e) => setPass(e.target.value)} />
          <button type="submit" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
