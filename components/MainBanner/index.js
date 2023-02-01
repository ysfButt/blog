import React from 'react';
import Image from 'next/image';

const MainBanner = ({ title = 'Tips, best practices, and updates' }) => (
  <div className="main-banner">
    <div className="container">
      <div className="caption">
        <Image 
          // src="https://instantly.foomonk.com/content/images/2022/05/logo.png" 
          src="/images/logo.png"
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Logo"
        />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  </div>
);

export default MainBanner;
