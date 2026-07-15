"use client";

import { Fragment, useState, useEffect } from "react";

const BUDGETS_USD = [
  { id: "budget_1", value: "within $10k", label: "within $10k" },
  { id: "budget_2", value: "$10-$20k", label: "$10-$20k" },
  { id: "budget_3", value: "$20-$50k", label: "$20-$50k" },
  { id: "budget_4", value: "$50-$100k", label: "$50-$100k" },
  { id: "budget_5", value: ">$100k", label: ">$100k" },
];

const BUDGETS_INR = [
  { id: "budget_1_inr", value: "within ₹5L", label: "within ₹5L" },
  { id: "budget_2_inr", value: "₹5L-₹15L", label: "₹5L-₹15L" },
  { id: "budget_3_inr", value: "₹15L-₹30L", label: "₹15L-₹30L" },
  { id: "budget_4_inr", value: "₹30L-₹50L", label: "₹30L-₹50L" },
  { id: "budget_5_inr", value: ">₹50L", label: ">₹50L" },
];

export default function ContactForm({
  caption = "Contact us",
  titleLine1 = ["Have", "a", "project", "in", "mind?"],
  titleLine2 = ["Let's", "chat"],
  isHero = false,
}: {
  caption?: string;
  titleLine1?: string[];
  titleLine2?: string[];
  isHero?: boolean;
} = {}) {
  const [location, setLocation] = useState("Global");
  const [settings, setSettings] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitFormData = async (form: HTMLFormElement) => {
    setSubmitting(true);
    const formData = new FormData(form);
    formData.append("location", location);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const errData = await res.json().catch(() => ({}));
        alert("Error sending email: " + (errData.error || "Please try again later."));
      }
    } catch(err) {
      console.error(err);
      alert("Network error: Could not send email.");
    }
    setSubmitting(false);
  };

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => setSettings(data)).catch(() => {});
    
    (window as any).triggerContactSubmit = () => {
      const form = document.querySelector('.contact-form') as HTMLFormElement;
      if (form) {
        submitFormData(form);
      }
    };
    return () => {
      delete (window as any).triggerContactSubmit;
    };
  }, [location]); // depend on location to have the latest state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFormData(e.currentTarget);
  };

  const budgets = location === "India" ? BUDGETS_INR : BUDGETS_USD;

  return (
    <section
      className={`contact-position-checker contact_form_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-top radius-80 radius-32-mob ${isHero ? "contacts_hero" : ""} ov--hidden`}
      id="contact-form"
    >
      <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop scramble">{caption}</div>
        <h2 className={`title ${isHero ? "title--xxl" : "title--xl"} mt-16 color--white mw1040 nobr-mob isview slidetop new-animate trd02`}>
          {titleLine1.map((word, i) => (
            <Fragment key={i}>
              <span className="a-word"><span style={{ transitionDelay: `${i * 0.08}s` }}>{word}</span></span>{" "}
            </Fragment>
          ))}
          <br />
          <span>
            {titleLine2.map((word, i) => (
              <Fragment key={i}>
                <span className="a-word"><span style={{ transitionDelay: `${(titleLine1.length + i) * 0.08}s` }}>{word}</span></span>{" "}
              </Fragment>
            ))}
          </span>
        </h2>
      </div>
      <div className="mt-40 mt-48-mob contact_form_wrap">
        <div className="container">
          <div className="flex v--stretch h--between flex--block-mob">
            <form onSubmit={handleSubmit} autoComplete="off" className="contact-form">
              <div className="relative">
                <div className="flex h--wrap v--start h--between row-gap-32 row-gap-24-mob form_wrap">
                  <input type="hidden" name="g-recaptcha-response" />
                  <input type="hidden" name="action" defaultValue="validate_captcha" />
                  <input type="hidden" name="form_type" defaultValue="1" />
                  <input type="hidden" name="source_page" defaultValue={process.env.NEXT_PUBLIC_FRONTEND_URL + "/"} />
                  {/* Honeypot field to prevent spam bots */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input type="text" name="phone_number" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="input-wrap w50 isview slidetop">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Your Name</div>
                    <input type="text" name="your_name" placeholder=" " className="required" data-max-length="40" data-pattern="[A-Za-z]" />
                    <p>Enter your name <sup>*</sup></p>
                  </div>
                  <div className="input-wrap w50 isview slidetop">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Your Email</div>
                    <input
                      type="text"
                      name="your_email"
                      placeholder=" "
                      className="required email"
                      data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                      data-message-error="Your Email is invalid"
                    />
                    <p>Enter your email <sup>*</sup></p>
                  </div>
                  <div className="input-wrap isview slidetop">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Message</div>
                    <textarea name="your_text" className="max-length" placeholder=" " data-max-length="1000" />
                    <p>Tell us about your project</p>
                  </div>
                  <div className="attach_wrap mt--8 mt-0-mob isview slidetop">
                    <input
                      type="file"
                      accept=".jpg, .png, .webp, .doc, .docx, .pdf, .csv, .xlsx"
                      id="attach_1"
                      className="attach_input"
                      multiple
                      name="files_arr[]"
                    />
                    <label htmlFor="attach_1" className="btn btn--white-light hover--dark-light clip">
                      <span><b>Attach file</b></span>
                    </label>
                    <div id="inner_1" className="attach_inner" />
                    <div className="file-err err fe1">You can upload maximum 5 files</div>
                    <div className="file-err err fe2">Some of your file not loaded, because maximum file size - 5 mb</div>
                  </div>
                  
                  <div className="location_wrap mt-8-mob isview slidetop w-full">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Your Location</div>
                    <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                      <Fragment>
                        <input type="radio" id="loc_global" name="location" className="custom-validate budget" value="Global" checked={location === "Global"} onChange={() => setLocation("Global")} />
                        <label htmlFor="loc_global" className="btn btn--label">Global</label>
                      </Fragment>
                      <Fragment>
                        <input type="radio" id="loc_india" name="location" className="custom-validate budget" value="India" checked={location === "India"} onChange={() => setLocation("India")} />
                        <label htmlFor="loc_india" className="btn btn--label">India</label>
                      </Fragment>
                    </div>
                  </div>

                  <div className="budget_wrap mt-8-mob isview slidetop">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Your budget for this project?</div>
                    <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                      {budgets.map((b) => (
                        <Fragment key={b.id}>
                          <input type="radio" id={b.id} name="budget" className="custom-validate budget" data-validate-key="budget" value={b.value} />
                          <label htmlFor={b.id} className="btn btn--label">{b.label}</label>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="btn_wrap flex v--center h--start pt-8 flex--block-mob isview slidetop w-full-mob">
                    <button type="submit" disabled={submitting} className="btn btn--orange btn--lg-desk arr fullw-mob hover--white">
                      <span><b>{submitting ? "Sending..." : "Submit"}</b></span>
                    </button>
                    <div className="txt txt--control-m color--white-light uppercase fw-600 mt-24-mob text--center-mob">
                      <p>
                        By clicking this button you accept <a href="/terms-of-use/">Terms of Service</a> and<br />
                        <a href="/privacy-policy/">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>
                {submitted && (
                  <div className="form_state text--center success type-1 color--white bg--dark" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, background: '#1c1c1c' }}>
                    <div className="icon icon--xs mx-auto flex h--center">
                      <img className="" src="/images/circle-check-svgrepo-com-1.svg" alt="Success" loading="lazy" decoding="async" />
                    </div>
                    <div className="title title--m mt-24">
                      <span>Thanks</span> for taking time to reach out!
                    </div>
                    <div className="txt txt--l mt-12 color--white-light">
                      We’ve received your message and our team will get back to you shortly.
                    </div>
                  </div>
                )}
              </div>
            </form>
            <div className="contacts ov-hidden">
              {settings?.founders?.map((founder: any, idx: number) => (
                <div key={idx} className="contact_wrap color--white flex fd--column isview slidetop">
                  <div className="title title--xs nobr-mob" dangerouslySetInnerHTML={{ __html: founder.roleContext }}></div>
                  <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                    <div className="radius-6 photo bg--white flex v--center h--center" style={{ aspectRatio: 0.75555555555556, padding: "16px" }}>
                      <img src={founder.avatar} alt={founder.name} loading="lazy" decoding="async" className="fullw" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="bio flex fd--column v--start">
                      <a href={founder.linkedin} target="_blank" rel="nofollow" className="soc">
                        <img src="/images/linkedin-alt.svg" loading="lazy" decoding="async" alt="" />
                      </a>
                      <div className="txt txt--m">{founder.name}</div>
                      <div className="txt txt--s color--white-light">{founder.role}</div>
                      <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                        <div className="copy_wrap">
                          <img src="/images/copy.svg" loading="lazy" decoding="async" data-text={founder.email} alt="" className="copyme" />
                        </div>
                        <a href={`mailto:${founder.email}`} className="btn btn--simple"><span>{founder.email}</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
