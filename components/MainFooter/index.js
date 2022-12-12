import React from 'react';
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';

const { Footer } = Layout;

const MainFooter = (props) => {
  return (
    <Footer className="main-footer">
      <div className="container">
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={12}>
            <p>Instantly Blog © 2022</p>
          </Col>
          <Col xs={24} lg={12}>
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
