import React, { useEffect, useState } from "react";
import { Row, Col, Avatar, Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from 'moment';

// Components
import MainBanner from "../../components/MainBanner";

const Posts = ({ notify, posts }) => {

  // Posts Data
  const postsList = posts.data;

  return (
    <div className="posts-page">
      {/* Main Banner */}
      <MainBanner />
      {/* Main Banner End */}
      {/* Post Section */}
      <section className="post-section">
        <div className="container">

          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} className="post-width-gird-content post-width-card-content" align="middle">
            {postsList.map((item, i) => (
              <Col xs={24} lg={8} key={i}>
                <Link 
                  href={{
                    pathname: `/posts/${item._id}`,
                    query: { slug: item.title },
                  }} 
                  className="post-link"
                >
                  <div className="post-card">
                    <figure className="post-img">
                      <img src="/images/post-img.jpg" alt="" />
                    </figure>
                    <div className="post-card-head">
                      <span className="category">Cold Email</span>
                      <h2 className="title">{item.title}</h2>
                    </div>
                    <div className="post-card-body">
                      <p>{item.description}</p>
                    </div>
                    <div className="post-card-footer">
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <div className="caption">
                        <strong className="title">
                          <Link href="/" className="user-name">Raul Kaevand</Link>
                        </strong>
                        <span className="date">{moment(item.publishedAt).format('LLL')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          {/* Post Width Gird Content End */}
          <Divider />

          {/* Post Width Gird Content */}
          <Link href="/" className="post-link">
            <Row gutter={[40, 40]} className="post-width-gird-content" align="middle">
              <Col xs={24} lg={14}>
                <figure className="post-img">
                  <img src="/images/post-img.jpg" alt="" />
                </figure>
              </Col>
              <Col xs={24} lg={10}>
                <div className="post-card">
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
              </Col>
            </Row>
          </Link>
          {/* Post Width Gird Content End */}
          <Divider />
          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} className="post-width-gird-content post-width-card-content" align="middle">
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
          {/* Post Width Gird Content End */}
          <Divider />
          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} className="post-width-gird-content post-width-card-content" align="middle">
            <Col xs={24} lg={12}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={12}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
          {/* Post Width Gird Content End */}
          <Divider />
          {/* Post Width Gird Content */}
          <Link href="/" className="post-link">
            <Row gutter={[40, 40]} className="post-width-gird-content" align="middle">
              <Col xs={24} lg={14}>
                <figure className="post-img">
                  <img src="/images/post-img.jpg" alt="" />
                </figure>
              </Col>
              <Col xs={24} lg={10}>
                <div className="post-card">
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
              </Col>
            </Row>
          </Link>
          {/* Post Width Gird Content End */}
          <Divider />
          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} className="post-width-gird-content post-width-card-content" align="middle">
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={8}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
          {/* Post Width Gird Content End */}
          <Divider />
          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} className="post-width-gird-content post-width-card-content" align="middle">
            <Col xs={24} lg={12}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
            <Col xs={24} lg={12}>
              <Link href="/" className="post-link">
                <div className="post-card">
                  <figure className="post-img">
                    <img src="/images/post-img.jpg" alt="" />
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
          {/* Post Width Gird Content End */}
          <Divider />
        </div>
      </section>
      {/* Post Section End */}
    </div>
  )
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/post`);
  const posts = await res.json();

  return {
    props: { posts } // props will be passed to the page
  };
};
