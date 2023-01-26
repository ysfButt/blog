import React, { useState } from "react";
import { Layout } from 'antd';
import Head from 'next/head';
import { useRouter } from "next/router";

// Components
import MainHeader from '../MainHeader';
import MainFooter from "../MainFooter";

const { Content } = Layout;

const MainLayout = ({ children }) => {

  const router = useRouter();
  
  const [showDrawer, setShowDrawer] = useState(false);

  const path = (router?.pathname === "/login" || router?.pathname === "/forgotPassword" || router?.pathname === "/resetPassword");

  return (
    <Layout className={`layout`}>

      {path ? 
        <>
          <Content className="main-content">
            {/* Main Content Children */}
            {children}
            {/* Main Content Children */}
          </Content>
        </>
        :
        <>
          {/* Main Head */}
          <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Blog Main Site</title>

            {/* <!-- Google Font --> */}
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
          </Head>
          {/* Main Head End */}

          {/* Main Header */}
          <MainHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
          {/* Main Header End */}

          {/* Main Content */}
          <Content className="main-content">

            {/* Main Content Children */}
            {children}
            {/* Main Content Children */}

          </Content>
          {/* Main Content End */}
          
          {/* Main Footer */}
          <MainFooter />
          {/* Main Footer End */}
        </>
      }

    </Layout>
  )
};

export default MainLayout;
