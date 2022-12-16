import React from "react";
import { Button, Form, Input } from 'antd';

export default function ForgotPassword() {
  return (
    <div className="oauth-page login-page">
      <div className="oauth-page-wrap">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" />
        </a>
        <h2 className="title">Forgot your password?</h2>
        <Form
          name="forgotPassword"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Your business email" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>Reset password</Button>
          </Form.Item>
        </Form>
        <p className="account-text">Need help? Please <a href="/">contact support</a></p>
        <p>Found your password? <a href="/">Login</a></p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}
