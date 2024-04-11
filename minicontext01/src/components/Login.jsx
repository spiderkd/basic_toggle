import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, setusername });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
