import { Fragment } from "react";

const BUDGETS = [
  { id: "budget_1", value: "up to $10k", label: "up to $10k" },
  { id: "budget_2", value: "$10-$20k", label: "$10-$20k" },
  { id: "budget_3", value: "$20-$50k", label: "$20-$50k" },
  { id: "budget_4", value: "$50-$100k", label: "$50-$100k" },
  { id: "budget_5", value: ">$100k", label: ">$100k" },
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
  return (
    <section
      className={`contact-position-checker contact_form_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom ${isHero ? "contacts_hero" : ""} ov--hidden next_block_sticky`}
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
            <form action="/?form-action=request" autoComplete="off" className="contact-form">
              <div className="relative">
                <div className="flex h--wrap v--start h--between row-gap-32 row-gap-24-mob form_wrap">
                  <input type="hidden" name="g-recaptcha-response" />
                  <input type="hidden" name="action" defaultValue="validate_captcha" />
                  <input type="hidden" name="form_type" defaultValue="1" />
                  <input type="hidden" name="source_page" defaultValue="https://phenomenonstudio.com/" />
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
                  <div className="budget_wrap mt-8-mob isview slidetop">
                    <div className="txt txt--control-s color--white-light uppercase fw-600">Your budget for this project?</div>
                    <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                      {BUDGETS.map((b) => (
                        <Fragment key={b.id}>
                          <input type="radio" id={b.id} name="budget" className="custom-validate budget" data-validate-key="budget" value={b.value} />
                          <label htmlFor={b.id} className="btn btn--label">{b.label}</label>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="btn_wrap flex v--center h--start pt-8 flex--block-mob isview slidetop w-full-mob">
                    <button className="btn btn--orange btn--lg-desk arr fullw-mob hover--white">
                      <span><b>Submit</b></span>
                    </button>
                    <div className="txt txt--control-m color--white-light uppercase fw-600 mt-24-mob text--center-mob">
                      <p>
                        By clicking this button you accept <a href="/terms-of-use/">Terms of Service</a> and<br />
                        <a href="/privacy-policy/">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form_state text--center success type-1 color--white bg--dark">
                  <div className="icon icon--xs">
                    <img className="" src="/images/circle-check-svgrepo-com-1.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                  </div>
                  <div className="title title--m mt-24">
                    <span>Thanks</span> for taking time to reachout!
                  </div>
                  <div className="txt txt--l mt-12 color--white-light">
                    Stay connected with us by subscribing to our LinkedIn account. By following, you’l be the first to
                    hear about our latest updates, news, and exciting development. We look forward to sharing our
                    journey with you!
                  </div>
                  <div className="btn_wrap mt-24 w-full-mob">
                    <a href="https://www.linkedin.com/company/phenomenonstudio/" target="_blank" rel="nofollow" className="btn btn--orange hover--white btn--lg-desk">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                          d="M13.8661 9.82749V14.3671H11.3513V10.1315C11.3513 9.06751 10.9876 8.34136 10.0773 8.34136C9.3824 8.34136 8.96887 8.83073 8.78694 9.30411C8.7206 9.47335 8.70352 9.7089 8.70352 9.94579V14.3671H6.18784C6.18784 14.3671 6.22172 7.19341 6.18784 6.45016H8.70327V7.57236C8.69817 7.58075 8.69154 7.5898 8.68674 7.59794H8.70327V7.57236C9.03747 7.03368 9.63432 6.26417 10.9702 6.26417C12.6254 6.26414 13.8661 7.3957 13.8661 9.82749ZM3.55633 2.63379C2.69572 2.63379 2.13281 3.22454 2.13281 4.00139C2.13281 4.76131 2.67944 5.36998 3.52294 5.36998H3.53975C4.41703 5.36998 4.96261 4.76142 4.96261 4.00139C4.94608 3.22454 4.41703 2.63379 3.55633 2.63379ZM2.28222 14.3671H4.79695V6.45016H2.28222V14.3671Z"
                          fill="currentColor"
                          fillOpacity="0.4"
                        />
                      </svg>
                      <span><b>Follow us</b></span>
                    </a>
                  </div>
                </div>
                <div className="form_state text--center success type-2 color--white bg--dark">
                  <div className="icon icon--xs">
                    <img className="" src="/images/circle-check-svgrepo-com-1.svg" alt="Product Design and Development Agency" loading="lazy" decoding="async" />
                  </div>
                  <div className="title title--m mt-24">
                    <span>Thanks</span> for taking time to reachout!
                  </div>
                  <div className="txt txt--l mt-12 color--white-light">
                    We’d love to hear more about your project! Feel free to schedule a call using the link provided.
                    This will help us better understand your vision and ensure we’re aligned on all the details.
                  </div>
                  <div className="btn_wrap mt-24 w-full-mob">
                    <a href="https://calendly.com/hello-phenomenon-studio/30min" target="_blank" rel="nofollow" className="btn btn--orange hover--white arr btn--lg-desk">
                      <span><b>Book a Call</b></span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="contacts ov-hidden">
              <div className="contact_wrap color--white flex fd--column isview slidetop">
                <div className="title title--xs nobr-mob">Have a project to <br />discuss?</div>
                <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                  <img className="radius-6 photo" src="/images/ksenia.jpg.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 0.75555555555556 }} />
                  <div className="bio flex fd--column v--start">
                    <a href="https://www.linkedin.com/in/kseniia-shalia-a21921240/" target="_blank" rel="nofollow" className="soc">
                      <img src="/images/linkedin-alt.svg" loading="lazy" decoding="async" alt="" />
                    </a>
                    <div className="txt txt--m">Kseniia Shalia</div>
                    <div className="txt txt--s color--white-light">Account Executive</div>
                    <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                      <div className="copy_wrap">
                        <img src="/images/copy.svg" loading="lazy" decoding="async" data-text="hello@phenomenon-studio.com" alt="" className="copyme" />
                      </div>
                      <a href="mailto:hello@phenomenon-studio.com" className="btn btn--simple"><span>hello@phenomenon-studio.com</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_wrap color--white flex fd--column isview slidetop">
                <div className="title title--xs nobr-mob">Have a partnership in <br />mind?</div>
                <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                  <img className="radius-6 photo" src="/images/polina.jpg.webp" alt="Product Design and Development Agency" loading="lazy" decoding="async" style={{ aspectRatio: 0.75555555555556 }} />
                  <div className="bio flex fd--column v--start">
                    <a href="https://www.linkedin.com/in/polina-chebanova/" target="_blank" rel="nofollow" className="soc">
                      <img src="/images/linkedin-alt.svg" loading="lazy" decoding="async" alt="" />
                    </a>
                    <div className="txt txt--m">Polina Chebanova</div>
                    <div className="txt txt--s color--white-light">Co-Founder & CPO</div>
                    <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                      <div className="copy_wrap">
                        <img src="/images/copy.svg" loading="lazy" decoding="async" data-text="polina@phenomenon-studio.com" alt="" className="copyme" />
                      </div>
                      <a href="mailto:polina@phenomenon-studio.com" className="btn btn--simple"><span>polina@phenomenon-studio.com</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
