import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function Login() {
  
  useEffect(() => {
    let userLogin = localStorage.getItem('user');
    let getItem = JSON.parse(userLogin);
    let redrict = getItem?.success;
    if (redrict === true) window.location.pathname = '/posts'
  }, []);

  const login = async (data) => {
    let results = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    results = await results.json();

    return results;
  }

  const onFinish = async (values) => {
    const user = await login(values);
    // const user = await getServerSideProps(values);
    console.log('Success:', values, user);
    localStorage.setItem('user', JSON.stringify(user));

    let userLogin = localStorage.getItem('user');
    let getItem = await JSON.parse(userLogin);
    let redrict = getItem?.success;
    if (redrict === false) {
      window.location.pathname = '/login'
      return
    } else {
      window.location.pathname = '/posts'
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
        {/* <p className="account-text">Don’t have a Rebrandly account yet? <a href="/">Get started</a></p>
        <a href="/">Login with SSO</a> */}
      </div>
    </div>
  )
};

// export async function getServerSideProps(data) {
//   let results = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     // body: JSON.stringify(data)
//   });

//   results = await results.json();

//   // console.log({ results });
//   return results;
// }

// export async function getServerSideProps(data) {
//   let results = await fetch("http://localhost:3000/api/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data)
//   });

//   results = await results.json();

//   console.log(results, data);

//   return results;
// }
