import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Header } = Layout;

const MainHeader = ({ showDrawer, setShowDrawer, extraClass = '' }) => {

  const router = useRouter();

  const [isLogo, setIsLogo] = useState(router.route == '/' ? false : true);
  
  // Fixed Header UseEffect
  useEffect(() => {
    window.onscroll = () => {
      let mainHeader = document.getElementsByClassName("main-header");
      mainHeader = mainHeader[0] ? mainHeader[0] : null;
      if (!mainHeader) return;

      if (window.pageYOffset > 20) {
        mainHeader.classList.add("fixed");
        if (router.route == "/") setIsLogo(true); // NOTE: will work for home page only
      } else {
        mainHeader.classList.remove("fixed");
        if (router.route == "/") setIsLogo(false);
      };
    }
  });

  return (
    <Header className={`main-header ${extraClass} ${router.route == "/" ? '' : 'alter'} `}>
      <div className="container">
        <div className="main-header-wrap">

          {/* Logo */}
          <h1 className="logo">
            <a href="/">
              <img 
                src={
                  isLogo ?
                  '/images/logo.png'
                  :
                  '/images/logo.png'
                }
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
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FacebookIcon />
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
