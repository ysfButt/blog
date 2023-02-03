import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";

// Utils
import { Post } from "../../utlis/helpers";

const Login = ({ notify }) => {

  const router = useRouter();
  
  useEffect(() => {
    if (localStorage.getItem('user')) router.push('/admin/posts');
  }, []);

  const onFinish = async (values) => {
    const { success, message, user } = await Post({ path: '/user/login', data: values, method: 'POST' });

    if (success) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/admin/posts');
    } else {
      notify("Successfull", message, 'success');
    }
  };

  return (
    <div className="oauth-page login-page">
      <div className="oauth-page-wrap">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" />
        </a>
        <h2 className="title">Login to your account</h2>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
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
      </div>
    </div>
  )
};

export default Login;
