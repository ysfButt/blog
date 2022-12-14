import React from "react";
import { Button, Form, Input } from 'antd';

export default function ResetPassword() {
  return (
    <div className="oauth-page login-page">
      <div className="oauth-page-wrap">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" />
        </a>
        <h2 className="title">Reset your password</h2>
        <Form
          name="resetPassword"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Your password" size="large" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your confirm password!' }]}
          >
            <Input.Password placeholder="Your confirm password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>Login</Button>
          </Form.Item>
        </Form>
        <p className="account-text">Need help? Please <a href="">contact support</a></p>
        {/* <p>Found your password?<a href="/">Login</a></p> */}
      </div>
    </div>
  )
}
