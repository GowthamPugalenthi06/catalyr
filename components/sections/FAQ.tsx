export default function FAQ() {
  const faqs = [
    {
      num: "01",
      question: "How do you price projects?",
      answer: "We work on fixed-price scopes for MVPs and clear monthly retainers for team extension and ongoing growth. You always know what you're paying for.",
    },
    {
      num: "02",
      question: "Do you outsource work?",
      answer: "No. Every designer, developer, and strategist works directly for Catalyr. We do not use third-party agencies or anonymous freelancers.",
    },
    {
      num: "03",
      question: "What technologies do you use?",
      answer: "We build robust, scalable applications using React, Next.js, Node.js, Python, and AWS. We don't chase fads; we use proven stacks.",
    },
  ];

  return (
    <section className="faq_section pb-200 pb-100-mob bg--white">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
          <h2>FAQ</h2>
        </div>
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02">
          <span className="a-word"><span style={{ transitionDelay: "0s" }}>Common</span></span>{" "}
          <span><span className="a-word"><span style={{ transitionDelay: "0.08s" }}>Questions</span></span></span>
        </div>
      </div>
      <div className="faq-wrap mt-40 mt-32-mob">
        {faqs.map((faq) => (
          <div key={faq.num} className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">{faq.num}</div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>{faq.question}</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p><span style={{ fontWeight: "400" }}>{faq.answer}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn--simple down dark">
                    <span className="visible-text">More</span>
                    <span className="hidden-text">Less</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
