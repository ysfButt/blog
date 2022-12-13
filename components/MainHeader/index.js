import React, { useEffect } from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

const MainHeader = ({ extraClass = '' }) => {
  
  // Fixed Header UseEffect
  useEffect(() => {
    window.onscroll = () => {
      let mainHeader = document.getElementsByClassName("main-header");
      mainHeader = mainHeader[0] ? mainHeader[0] : null;
      if (!mainHeader) return;

      if (window.pageYOffset > 20) {
        mainHeader.classList.add("fixed");
      } else {
        mainHeader.classList.remove("fixed");
      };
    }
  });

  return (
    <Header className={`main-header ${extraClass}`}>
      <div className="container">
        <div className="main-header-wrap">

          {/* Logo */}
          <h1 className="logo">
            <a href="/">
              <img 
                src='/images/logo.png'
                alt="Email Main Site" 
              />
            </a>
          </h1>
          {/* Logo End */}

          {/* Social Links */}
          <ul className="social-links">
            <li>
              <Link href="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <WifiIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <MoonIcon />
              </Link>
            </li>
          </ul>
          {/* Social Links End */}
          
        </div>
      </div>
    </Header>
  )
}

export default MainHeader;

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" width="20" height="20">
    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.204 4.911h-3.546c-2.103 0-4.443.885-4.443 3.934.01 1.062 0 2.08 0 3.225h-2.433v3.872h2.509v11.147h4.61v-11.22h3.042l.275-3.81h-3.397s.007-1.695 0-2.187c0-1.205 1.253-1.136 1.329-1.136h2.054V4.911z"></path>
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" width="20" height="20">
    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
  </svg>
);

const WifiIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20">
    <circle cx="6.18" cy="17.82" r="2.18"></circle>
    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" width="20" height="20">
    <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z"></path>
  </svg>
);
