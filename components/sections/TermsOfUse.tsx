"use client";

import React, { useState } from "react";

const TERMS_CONTENT = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>Our aim is to keep this Agreement as readable as possible, but in some cases for legal reasons, some of the language is required "legalese".</p>
        <br />
        <p>These terms of service are entered into by and between You and Catalyr Inc. ("Company," "we," "our," or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively "Terms of Service"), govern your access to and use of https://catalyr.com, including any content, functionality, and services offered on or through https://catalyr.com (the "Website").</p>
      </>
    )
  },
  {
    title: "2. Your Acceptance of this Agreement",
    content: (
      <>
        <p>Please read the Terms of Service carefully before you start to use the Website.</p>
        <br />
        <p>By using the Website (or by clicking to accept or agree to the Terms of Service when this option is made available to you), you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms of Service, you must not access or use the Website.</p>
        <br />
        <p><strong>BY ACCESSING AND USING THIS WEBSITE, YOU:</strong></p>
        <ul>
          <li><strong>ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS OF SERVICE;</strong></li>
          <li><strong>YOU REPRESENT AND WARRANT THAT YOU ARE THE LEGAL AGE OF MAJORITY UNDER APPLICABLE LAW TO FORM A BINDING CONTRACT WITH US; AND,</strong></li>
          <li><strong>YOU AGREE IF YOU ACCESS THE WEBSITE FROM A JURISDICTION WHERE IT IS NOT PERMITTED, YOU DO SO AT YOUR OWN RISK.</strong></li>
        </ul>
      </>
    )
  },
  {
    title: "3. Intellectual Property Rights",
    content: (
      <>
        <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
      </>
    )
  },
  {
    title: "4. Limitations of Liability",
    content: (
      <>
        <p>In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.</p>
      </>
    )
  },
  {
    title: "5. Governing Law",
    content: (
      <>
        <p>All matters relating to the Website and these Terms of Service, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of India without giving effect to any choice or conflict of law provision or rule.</p>
        <br />
        <p>Any legal suit, action, or proceeding arising out of, or related to, these Terms of Service or the Website shall be instituted exclusively in the courts located in Salem, Tamil Nadu, India.</p>
      </>
    )
  }
];

export default function TermsOfUse() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '42px', fontWeight: '500', color: '#111', marginBottom: '64px' }}>
          Terms of Service
        </h1>
        
        <div className="accordion-list">
          {TERMS_CONTENT.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: index === TERMS_CONTENT.length - 1 ? '1px solid #e2e8f0' : 'none'
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
