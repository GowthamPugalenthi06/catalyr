"use client";

import React, { useState } from "react";

const PRIVACY_CONTENT = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>At Catalyr Inc., d/b/a Catalyr ("us", "we", "our" or the "Company") we value your privacy and the importance of safeguarding your data. This Privacy Policy (the "Policy") describes our privacy practices for the activities set out below. As per your rights, we inform you how we collect, store, access, and otherwise process information relating to individuals. In this Policy, personal data ("Personal Data") refers to any information that on its own, or in combination with other available information, can identify an individual.</p>
        <br />
        <p>The office locations of where Catalyr Inc. can be found <a href="/contact-us" style={{ textDecoration: 'underline' }}>here</a>.</p>
        <br />
        <p>We are committed to protecting your privacy in accordance with the highest level of privacy regulation. As such, we follow the obligations under the below regulations:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '16px' }}>
          <li style={{ marginBottom: '8px' }}>India's Digital Personal Data Protection Act (DPDP)</li>
          <li style={{ marginBottom: '8px' }}>The EU's General Data Protection Regulation (GDPR)</li>
          <li style={{ marginBottom: '8px' }}>California's Consumer Privacy Act (CCPA)</li>
        </ul>
      </>
    )
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.</p>
        <br />
        <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Names</li>
          <li style={{ marginBottom: '8px' }}>Phone numbers</li>
          <li style={{ marginBottom: '8px' }}>Email addresses</li>
          <li style={{ marginBottom: '8px' }}>Contact preferences</li>
          <li style={{ marginBottom: '8px' }}>Job titles</li>
        </ul>
      </>
    )
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '16px' }}>
          <li style={{ marginBottom: '8px' }}><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
          <li style={{ marginBottom: '8px' }}><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes.</li>
          <li style={{ marginBottom: '8px' }}><strong>To deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising.</li>
        </ul>
      </>
    )
  },
  {
    title: "4. Data Security",
    content: (
      <>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
      </>
    )
  },
  {
    title: "5. Your Privacy Rights",
    content: (
      <>
        <p>In some regions (like the EEA, UK, and India), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>
        <br />
        <p>To exercise any of these rights, please contact us using the details provided below.</p>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '42px', fontWeight: '500', color: '#111', marginBottom: '64px' }}>
          Catalyr Inc. Privacy Policy
        </h1>
        
        <div className="accordion-list">
          {PRIVACY_CONTENT.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: index === PRIVACY_CONTENT.length - 1 ? '1px solid #e2e8f0' : 'none'
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
