import React from 'react';
import { Layout, Row, Col, Avatar, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Footer } = Layout;

const MainFooter = (props) => {

  const router = useRouter();

  return (
    <Footer className="main-footer">
      {/* {router.pathname === "/posts/" && */}
        <div className="main-footer-upper">
          <div className="container">
            <Row gutter={[30, 30]} className="footer-post">
              <Col xs={24} lg={8}>
                <div className="footer-post-card">
                  <h4 className="title">MORE IN <Link href="/">COLD EMAIL</Link></h4>
                  <div className="caption">
                    <h4 className="caption-title">
                      <Link href="/">29 Effective and Catchy Email Subject Lines for Sales Emails</Link>
                    </h4>
                    <span>26 November, 2022 – 9 min read</span>
                  </div>
                  <div className="caption">
                    <h4 className="caption-title">
                      <Link href="/">13 Essential Email Marketing Tips to Boost Open Rates</Link>
                    </h4>
                    <span>26 November, 2022 – 9 min read</span>
                  </div>
                  <div className="caption">
                    <h4 className="caption-title">
                      <Link href="/">Email Sending Limits of Top Email Service Providers</Link>
                    </h4>
                    <span>26 November, 2022 – 9 min read</span>
                  </div>
                  <Button ghost>See all 49 posts →</Button>
                </div>
              </Col>
              <Col xs={24} lg={16}>
                <Link href="/" className="post-link">
                  <div className="post-card">
                    <figure className="post-img">
                      <img src="/images/post-img-2.jpg" alt="" />
                    </figure>
                    <div className="post-card-head">
                      <span className="category">Cold Email</span>
                      <h2 className="title">12 Recruiter Email Templates to Win Over Candidates</h2>
                    </div>
                    <div className="post-card-body">
                      <p>A candidate’s experience reflects on a company’s brand. That’s why the best companies promote quality and consistent communication as part of the application process to win candidates over.</p>
                    </div>
                    <div className="post-card-footer">
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <div className="caption">
                        <strong className="title">
                          <Link href="/">Raul Kaevand</Link>
                        </strong>
                        <span className="date">26 Nov 2022</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      {/* } */}
      <div className="container">
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <p>Instantly Blog © 2022</p>
          </Col>
          <Col xs={24} md={12}>
            <ul className="footer-links">
              <li>
                <Link href="/">Latest Posts</Link>
              </li>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Footer>
  )
};

export default MainFooter;
