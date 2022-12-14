import React from "react";
import { Divider, Button, Checkbox, Form, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
  return (
    <div className="oauth-page login-page">
      <div className="oauth-page-wrap">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" />
        </a>
        <h2 className="title">Login to your account</h2>
        {/* <div className="google-btn-wrap text-center">
          <GoogleLogin
            buttonText="Sign in with Google"
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <Divider>Or</Divider> */}
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Your email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Your password" addonAfter={<a href="/">Forget?</a>} size="large" />
          </Form.Item>

          <Form.Item name="remember">
            <Checkbox>Remember me on this device <InfoCircleOutlined /></Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>Login</Button>
          </Form.Item>
        </Form>
        {/* <p className="account-text">Don’t have a Rebrandly account yet? <a href="/">Get started</a></p>
        <a href="/">Login with SSO</a> */}
      </div>
    </div>
  )
}
