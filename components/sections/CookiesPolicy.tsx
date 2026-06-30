"use client";

import React, { useState } from "react";

const COOKIES_CONTENT = [
  {
    title: "1. What Are Cookies",
    content: (
      <>
        <p>Cookies are small files placed on your computer or mobile device by a website you visit. They are widely used to make websites work more efficiently, as well as to provide reporting information.</p>
        <br />
        <p>When you visit the Catalyr website, we or our authorized third-party service providers may place small data files on your browser. These files enable our systems to recognize your browser and capture and remember certain information.</p>
      </>
    )
  },
  {
    title: "2. How We Use Cookies",
    content: (
      <>
        <p>We use cookies for several reasons, primarily to ensure that our Website functions properly and to improve your overall experience.</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '16px' }}>
          <li style={{ marginBottom: '8px' }}><strong>Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our Website.</li>
          <li style={{ marginBottom: '8px' }}><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
          <li style={{ marginBottom: '8px' }}><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
          <li style={{ marginBottom: '8px' }}><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
        </ul>
      </>
    )
  },
  {
    title: "3. Managing Cookies",
    content: (
      <>
        <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>
        <br />
        <p>To learn more about how to manage cookies on popular browsers, please visit the help pages of your specific browser (e.g., Chrome, Safari, Firefox, Edge).</p>
      </>
    )
  },
  {
    title: "4. Third-Party Cookies",
    content: (
      <>
        <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on. Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control.</p>
      </>
    )
  },
  {
    title: "5. Contact Us",
    content: (
      <>
        <p>If you have any questions about our use of cookies or this Cookies Policy, please contact us by visiting the contact page on our website or emailing us directly at info@catalyr.com.</p>
      </>
    )
  }
];

export default function CookiesPolicy() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '42px', fontWeight: '500', color: '#111', marginBottom: '64px' }}>
          Catalyr Inc. Cookies Policy
        </h1>
        
        <div className="accordion-list">
          {COOKIES_CONTENT.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: index === COOKIES_CONTENT.length - 1 ? '1px solid #e2e8f0' : 'none'
                }}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '24px 0', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '20px', fontWeight: '500', color: '#111' }}>{item.title}</span>
                  <span style={{ fontSize: '24px', color: '#111', fontWeight: '300' }}>{isOpen ? '−' : '+'}</span>
                </button>
                
                <div 
                  style={{ 
                    maxHeight: isOpen ? '2000px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.3s ease-in-out',
                    paddingBottom: isOpen ? '32px' : '0'
                  }}
                >
                  <div style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }} className="legal-content">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
