import React from "react";
import { useNavigate } from "react-router";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { Link } from "react-router-dom";

import { useLoginMutation } from "../../hooks/auth";

const { Content } = Layout;

export default function Login() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const loginMutation = useLoginMutation();

  const onSubmit = async ({
    signname,
    password,
  }: {
    signname: string;
    password: string;
  }) => {
    const body = {
      signname,
      password,
    };

    loginMutation.mutate(body);
  };

  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            padding: "20px",
            width: "500px",
            height: "450px",
            background: "white",
            borderRadius: 10,
          }}
        >
          <Col
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              로고
            </div>
            <Form
              form={form}
              onFinish={onSubmit}
              layout="vertical"
              style={{
                width: "100%",
              }}
            >
              <Form.Item
                label="아이디"
                name={"signname"}
                rules={[
                  {
                    required: true,
                    message: "아이디를 입력해 주세요",
                  },
                ]}
              >
                <Input placeholder="아이디를 입력해주세요." />
              </Form.Item>

              <Form.Item
                style={{
                  marginBottom: "60px",
                }}
                label="비밀번호"
                name={"password"}
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 입력해 주세요.",
                  },
                ]}
              >
                <Input type="password" placeholder="비밀번호를 입력해주세요." />
              </Form.Item>

              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={() => form.submit()}
              >
                로그인
              </Button>

              <Col>
                <p>
                  계정이 없으신가요?
                  <Link
                    style={{
                      paddingLeft: "10px",
                    }}
                    to="/sign-up"
                  >
                    회원가입
                  </Link>
                </p>
              </Col>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
