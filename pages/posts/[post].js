import React, { useEffect } from "react";
import { Row, Col, Avatar } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {

  const router = useRouter();
  const { post } = router.query;

  // useEffect(() => {
  //   let mainNavLinks = document.querySelectorAll("aside ul li a");

  //   // console.log("links",mainNavLinks);

  //   window.addEventListener("scroll", event => {
  //     let fromTop = window.scrollY;

  //     mainNavLinks.forEach(link => {
  //       let section = document.querySelector(link.hash);

  //       // console.log("sections", section);

  //       if (
  //         section.offsetTop <= fromTop &&
  //         section.offsetTop + section.offsetHeight > fromTop
  //       ) {
  //         link.classList.add("active");
  //       } else {
  //         link.classList.remove("active");
  //       }
  //     });
  //   });

  // });

  return (
    <div className="post-page">
      {/* Main Inner Banner */}
      <div className="main-inner-banner">
        <div className="container">
          <Row justify="center">
            <Col xs={24} lg={16}>
              <div className="post-card">
                <div className="post-card-head">
                  <span className="category">Cold Email</span>
                  <h1 className="title">12 Recruiter Email Templates to Win Over Candidates {post}</h1>
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
        </div>
      </div>
      {/* Main Inner Banner End */}
      {/* Post Section */}
      <section className="post-section post-section-content">
        <div className="container">
          {/* Post Width Gird Content */}
          <Row gutter={[40, 40]} justify="center">
            <Col xs={24}>
              <figure className="post-img">
                <img src="/images/post-img.jpg" alt="" />
              </figure>
            </Col>
            <Col xs={24} lg={16}>
              <div className="post-article-wrap p-relative">
                <article className="post-article">
                  <p>Recruiting top candidates all starts with great communication during the recruitment process. Most recruiters rely on email, which is why when done right, cold email outreach gets things rolling smoothly and streamlines the recruitment process.</p>
                  <p>In this article, we’ll be covering:</p>
                  <ul>
                    <li>How to write excellent recruiter emails for candidates.</li>
                    <li>And email templates you can use in your next recruitment campaigns.</li>
                  </ul>
                  <h2 id="heading">How to Write Great Recruiter Emails to Candidates</h2>
                  <figure>
                    <img src="/images/post-img-1.jpg" alt="" />
                  </figure>
                  <p>Email outreach is among the best ways to reach candidates. The most efficient method of writing these emails is utilizing <a href="/">easy-to-use email outreach tools</a> such as Instantly.</p>
                  <p>With these tools, recruiters can send emails with ease and direct focus on the following best practices when doing outreach campaigns.</p>
                  <h3 id="heading-1">Employ Personalization</h3>
                  <p>Tailoring emails show how a company appreciates and values its candidates. To streamline this process, recruiters can use an Applicant Tracking System (APS), which allows centralized access to the following:</p>
                  <ul>
                    <li>Personal information</li>
                    <li>References</li>
                    <li>Cover letters</li>
                    <li>Previous experiences with the applicant.</li>
                  </ul>
                  <p>Recruiters can use a candidate’s information to craft highly personalized emails that are far more likely to get replies.</p>
                  <h3 id="heading-2">Craft an Enticing Subject Line</h3>
                  <p>Subject lines can make or break your <a href="/">outreach email</a> since it’s the first thing candidates see. <a href="/">Studies suggest</a> that 64% of recipients attribute subject lines as the primary factor in their decision to open an email.</p>
                  <p>Research also reveals that personalized subject lines can increase email opens by 26%. That’s already a phenomenal boost considering less than 21.3% of emails get opened on average.</p>
                  <p>The best subject lines have three important attributes: <strong>Concise, Descriptive, and Actionable.</strong> But when creating your subject lines, make sure that it doesn’t have spam-trigger words to ensure the deliverability of the emails.</p>
                  <p className="with-border">Hello, I’m {"{{your name}}"} a recruiter at {"{{company name}}"}. As I was reading through your profile on {"{{platform X}}"}, I was impressed by your expertise in {"{{area of expertise or noteworthy accomplishment}}"}.</p>
                </article>
                {/* Post Side Menu */}
                <aside className="post-side-bar">
                  <strong className="title">TABLE OF CONTENTS</strong>
                  <ul className="post-side-menu">
                    <li>
                      <Link href="#heading" className="active">How to Write Great Recruiter Emails to Candidates</Link>
                      <ul>
                        <li>
                          <Link href="#heading-1">Employ Personalization</Link>
                        </li>
                        <li>
                          <Link href="#heading-2">Craft an Enticing Subject Line</Link>
                        </li>
                        <li>
                          <Link href="/">Keep it Short and Simple</Link>
                        </li>
                        <li>
                          <Link href="/">Include a Clear CTA</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/">12 Recruiter Email Templates to Easily Win Candidates</Link>
                      <ul>
                        <li>
                          <Link href="/">Candidate Sourcing and Introduction Templates</Link>
                        </li>
                        <li>
                          <Link href="/">Job Interview and Scheduling Templates</Link>
                        </li>
                        <li>
                          <Link href="/">Job Offer Templates</Link>
                        </li>
                        <li>
                          <Link href="/">Candidate Rejection Templates</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/">Key Takeaways</Link>
                    </li>
                  </ul>
                </aside>
                {/* Post Side Menu End */}
              </div>
            </Col>
          </Row>
          {/* Post Width Gird Content End */}
        </div>
      </section>
      {/* Post Section End */}
    </div>
  )
};

export default Post;
