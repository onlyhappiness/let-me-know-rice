import React, {
  useEffect,
  useState,
} from "react";

import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  // 유저 id
  const [userId, onChangeUserId] = useState("");

  // 유저 비밀번호
  const [userPassword, onChangeUserPassword] =
    useState("");

  let navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // console.log(userId);
  // console.log(userPassword);

  return (
    <Form
      name="basic"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
      // labelCol={{
      //   span: 8,
      // }}
      // wrapperCol={{
      //   span: 16,
      // }}
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message:
              "Please input your username!",
          },
        ]}
      >
        <Input
          value={userId}
          onChange={onChangeUserId}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message:
              "Please input your password!",
          },
        ]}
      >
        <Input.Password
          value={userPassword}
          onChange={onChangeUserPassword}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          // htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
