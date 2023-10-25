import React from "react";
import { useState } from "react";
import { login, logout } from "../reducers/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  return (
    <div>
      <h1>THIS is the Login Page</h1>   
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatch(login({ username: name }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
