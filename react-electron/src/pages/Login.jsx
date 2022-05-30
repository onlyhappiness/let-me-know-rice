import React, {
  // useEffect,
  useState,
} from "react";

import "antd/dist/antd.css";
// import {
//   Form,
//   Input,
//   Button,
//   Checkbox,
// } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 유저 id
  const [Email, setEmail] = useState("");
  const onEmailHandler = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  // 유저 비밀번호
  const [Password, setPassword] = useState("");
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  // TODO: Submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let user = {
      email: Email,
      password: Password,
    };

    console.log(user);

    if (
      user.email === "test1@gmail.com" &&
      user.password === "test1"
    ) {
      navigate("/home");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      onSubmit={onSubmitHandler}
    >
      <label>Email</label>
      <input
        type={"email"}
        value={Email}
        onChange={onEmailHandler}
      />

      <label>Password</label>
      <input
        type={"password"}
        value={Password}
        onChange={onPasswordHandler}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
