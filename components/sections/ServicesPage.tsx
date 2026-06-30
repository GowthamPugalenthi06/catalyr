import Awards from './Awards';
import ContactForm from './ContactForm';
import { SERVICES_DATA } from './ServicesData';

export default function ServicesPage({ slug = 'web-development' }: { slug?: string }) {
  const data = SERVICES_DATA[slug] || SERVICES_DATA['web-development'];

  return (
    <>


<main>
    <section className="hero bg--dark checker-header">
    <div className="container color--white">
        <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop scramble section-alt"><h1>{data.heroTitle}</h1></div>        <div className="nobr-mob title title--xl mw1040 isview slidetop trd02 new-animate"><h2>{data.heroHeading}</h2></div>                <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04">
            <a className="btn btn--orange hover--white btn--lg-desk arr arr-right" href="#contact-form" target="_self"><span><b>Let’s talk</b></span></a>            <a className="btn btn--white-light arr arr-right hover--white btn--lg-desk" href="/work" target="_self"><span><b>View our cases</b></span></a>        </div>
        <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
            <div className="col sticky isview slidetop animated-media-wrapper">
                <div className="media_wrap animated-media">
                    <img src={data.heroImage} className="fullw radius-12" alt={data.heroTitle} style={{ aspectRatio: 1.33, objectFit: 'cover', verticalAlign: 'middle' }} loading="lazy" />
                </div>
            </div>
            <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column h--between">
                <div className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit pr-12 pr-0-mob" style={{ width: '100%' }}>
                    <div>{data.heroDesc}</div>
                </div>
                <div className="mt-auto text--center">
                    <div className="txt txt--caption-m scramble color--white-light text--left mb-24 uppercase fw-600 pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
                        <div>catalyr studio FOCUS</div>
                    </div>
                    <div className="values_wrap grid col-2 clip_1 isview slidetop">
                        <div className="col flex v--center h--center fd--column text--center">
                            <div className="title--m color--white">Modern</div>
                            <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                                <p>Next-gen technology stack</p>
                            </div>
                        </div>
                        <div className="col flex v--center h--center fd--column text--center">
                            <div className="title--m color--white">Scale</div>
                            <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                                <p>Built for future growth</p>
                            </div>
                        </div>
                        <div className="col flex v--center h--center fd--column text--center">
                            <div className="title--m color--white">Fast</div>
                            <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                                <p>Rapid development cycles</p>
                            </div>
                        </div>
                        <div className="col flex v--center h--center fd--column text--center">
                            <div className="title--m color--white">Secure</div>
                            <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                                <p>Enterprise-grade security</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob">
    <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">{data.challengesTitle}</div>        <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02 inner-inherit"><div><h2>{data.challengesHeading}</h2></div></div>            </div>
    <div className="mt-100 mt-40-mob problems">
        {data.challenges?.map((c: any, i: number) => (
            <div key={i} className={`row sticky row-${i+1} bg--white problems--col-2`}>
                <div className="inner">
                    <div className="container">
                        <div className="flex v--stretch h--between vertical_scroll_slider">
                            <div className="left pr-24 pr-0-mob">
                                <div className="txt txt--l inner-inherit">
                                    <div><p>{c.q}</p></div>
                                </div>
                            </div>
                            <div className="center flex fd--column v--start">
                                <div className="txt txt--lead inner-inherit">
                                    <div>{c.a}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <div className="space"></div>
    </div>
    </section>
    <section className="contact_checker how_we_do_it_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-top radius-80 radius-32-mob">
            <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600">{data.solutionsTitle}</div>        <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview slidetop new-animate"><h2>{data.solutionsHeading}</h2></div>    </div>
    <div className="how_we_do_it_items mt-48 mt-32-mob">
        <div className="container">
            <div className="grid col-3 col-1-mob services_row clipped">
                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein"><span></span><span></span><span></span></div>
                {data.solutions?.map((s: any, i: number) => (
                    <div key={i} className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                        <div className="h6 color--white-tertiary">{s.num}</div>
                        <div className="pt-100 pt-48-mob">
                            <div className="title title--xs color--white">{s.title}</div>
                            <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                                <div>{s.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
                <div className="mt-200 mt-100-mob"></div>
        <div className="container">
        <div className="txt txt--caption-m color--white-light uppercase fw-600">Benefits of a Professionally Designed Web app</div>        <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview slidetop new-animate"><h2><span className="a-word"><span style={{ transitionDelay: "0s" }}>Why</span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>should</span></span> <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>you</span></span> <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>choose</span></span> <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>our</span></span> <br />
<span><span className="a-word"><span style={{ transitionDelay: "0.4s" }}>web</span></span> <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>app</span></span> <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>design</span></span></span> <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>agency?</span></span></h2></div>    </div>
    <div className="how_we_do_it_items mt-48 mt-32-mob">
        <div className="container">
            <div className="grid col-3 col-1-mob services_row clipped">
                                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein"><span></span><span></span><span></span></div>
                {data.benefits?.map((b: any, i: number) => (
                    <div key={i} className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                        <span className="icon">
                            <img className="" src={`/${b.icon}`} alt={b.title} loading="lazy" decoding="async" />
                        </span>
                        <div className="pt-100 pt-48-mob">
                            <div className="title title--xs color--white">{b.title}</div>
                            <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                                <div>{b.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
                {false && <>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                                            <span className="icon">
                            <img className="" src="images/asterisk-svgrepo-com-2.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        </span>
                                        <div className="pt-100 pt-48-mob">
                        <div className="title title--xs color--white">User-centric approach</div>
                        <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                            <div>We put your users at the heart of the design process. By conducting in-depth research, usability testing, and data-driven decision-making, we craft intuitive web apps that enhance user experience and drive conversions.</div>
                        </div>
                    </div>
                </div>
                                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible"><span></span><span></span><span></span></div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                                            <span className="icon">
                            <img className="" src="images/asterisk-svgrepo-com-2-1-2.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        </span>
                                        <div className="pt-100 pt-48-mob">
                        <div className="title title--xs color--white">Seamless collaboration & transparency</div>
                        <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                            <div>We integrate smoothly with your team, offering real-time updates, direct communication channels, and a collaborative workflow. This ensures you’re involved in every step, with full transparency and control over the process.</div>
                        </div>
                    </div>
                </div>
                                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible"><span></span><span></span><span></span></div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                                            <span className="icon">
                            <img className="" src="images/asterisk-svgrepo-com-2-9.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        </span>
                                        <div className="pt-100 pt-48-mob">
                        <div className="title title--xs color--white">Design with development in mind</div>
                        <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                            <div>Our designs are not just visually stunning—they are built for seamless implementation. We create scalable, development-ready designs that follow UX best practices, ensuring smooth integration, faster development cycles, and reduced rework.</div>
                        </div>
                    </div>
                </div>
                                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein"><span></span><span></span><span></span></div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                                            <span className="icon">
                            <img className="" src="images/asterisk-svgrepo-com-2-3.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        </span>
                                        <div className="pt-100 pt-48-mob">
                        <div className="title title--xs color--white">Mid-level and senior experts</div>
                        <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                            <div>Our team consists of seasoned web designers with 7+ years of experience, specializing in your industry. This expertise ensures your web app is strategically designed to meet both business goals and user expectations.</div>
                        </div>
                    </div>
                </div>
                                <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible"><span></span><span></span><span></span></div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                                            <span className="icon">
                            <img className="" src="images/asterisk-svgrepo-com-2-4.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        </span>
                                        <div className="pt-100 pt-48-mob">
                        <div className="title title--xs color--white">Proven trust and high satisfaction</div>
                        <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                            <div>We prioritize long-term relationships and client satisfaction. With a 98% satisfaction rate, our commitment to quality, reliability, and results-driven design has made us a trusted partner for businesses worldwide.</div>
                        </div>
                    </div>
                </div>
                </>}
            </div>
        </div>
    </div>
    </section>

    <section className="problems_we_solve pt-200 pb-200 pt-100-mob pb-100-mob bg--white">
    <div className="heading-row">
        <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop inner-inherit scramble"><h2>{data.processTitle}</h2></div>            <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02 inner-inheritinner-inherit"><div>{data.processHeading}</div></div>                            <div className="color--dark-secondary txt txt--l mw706 isview slidetop trd02 inner-inherit mt-48"><div></div></div>                    </div>
    </div>
    <div className="sticky-space"></div>
    <div className="mt-40-mob problems process problems--col-2 mt-100">
        {data.process?.map((p: any, i: number) => (
            <div key={i} className={`row sticky row-${i+1} bg--white process-row`}>
                <div className="inner">
                    <div className="container">
                        <div className="flex v--stretch h--between vertical_scroll_slider">
                            <div className="left flex fd--column">
                                <div className="txt txt--l mb-24">
                                    <p>{p.name}</p>
                                </div>
                                <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">{p.num}</div>
                            </div>
                            <div className="center flex fd--column v--start">
                                <div className="txt txt--m">
                                    <h3>{p.heading}</h3>
                                    <p>{p.desc}</p>
                                </div>
                                <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                            {p.steps.map((step: string, j: number) => (
                                                <li key={j}>{step}</li>
                                            ))}
                                        </ul>   
                                    </div>
                                </div>
                                <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                    <p>Deliverables</p>
                                </div>
                                <div className="divider"></div>
                                <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                    {p.deliverables.map((del: string, j: number) => (
                                        <span key={j} className="tag tag--light">{del}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {false && <>
                <div className="row sticky row-1 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Stakeholder interview</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                01                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Defining your goals, users, and technical context</h3>
<p>At our web app agency, we start with your goals, team structure, and tech context to shape how the product should work.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Business goals and platform vision
</li>
                                                                                            <li>Internal workflows and technical setup
</li>
                                                                                            <li>User types and access logic</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Stakeholder brief</span>
                                                                <span className="tag tag--light">product context summary</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-2 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Market & user research</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                02                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Grounding UX in category logic and user expectations</h3>
<p>We review what similar tools are doing — and what users expect — to guide early layout, flow, and feature decisions.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Competitive UI/UX audit
</li>
                                                                                            <li>Category-specific design benchmarks
</li>
                                                                                            <li>Early user behavior mapping</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">UX audit</span>
                                                                <span className="tag tag--light">competitor feature report</span>
                                                                <span className="tag tag--light"> trend snapshot</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-3 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Feature breakdown</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                03                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Defining what to design now—and what can wait</h3>
<p>Together, we organize features by business value and feasibility to shape your mobile app and web deign MVP or V1 scope.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>MVP vs. roadmap features
</li>
                                                                                            <li>User-impact scoring
</li>
                                                                                            <li>Release phasing plan</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Feature map</span>
                                                                <span className="tag tag--light">release pipeline</span>
                                                                <span className="tag tag--light">product logic outline</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-4 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Userflow & wireframes</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                04                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Structuring how users navigate your web app</h3>
<p>Our web app agency maps flows across user roles and creates wireframes that bring logic, layout, and interactions into focus.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>End-to-end user journeys
</li>
                                                                                            <li>Key screens by user type
</li>
                                                                                            <li>Early interaction logic</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Multi-role user flows</span>
                                                                <span className="tag tag--light">navigation models</span>
                                                                <span className="tag tag--light">screen wireframes</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-5 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Visual direction & moodboarding</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                05                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Setting the tone with focused web UI design services</h3>
<p>We explore visual styles and UI tone to define what your product should look and feel like before full web design begins.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Colour, type, and spacing systems
</li>
                                                                                            <li>Visual mood samples by industry
</li>
                                                                                            <li>UI style cues mapped to product goals</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Moodboard</span>
                                                                <span className="tag tag--light">Design concepts</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-6 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Mockups development</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                06                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Designing all screens for dev-ready output</h3>
<p>We deliver complete web application GUI design: every screen, state, and breakpoint built for clarity, consistency, and clean handoff.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Dev-aligned screen designs
</li>
                                                                                            <li>Modular UI components
</li>
                                                                                            <li>Variants for different screen sizes</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light"> Figma files with specs</span>
                                                                <span className="tag tag--light">UI components</span>
                                                                <span className="tag tag--light">dev-ready mockups</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-7 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Testing & validation</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                07                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Reviewing how the web-based app design performs before you build it</h3>
<p>We test flows via clickable prototypes and refine web designs based on feedback from users and stakeholders.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Usability testing
</li>
                                                                                            <li>Stakeholder reviews
</li>
                                                                                            <li>UX adjustments before dev</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Feedback report</span>
                                                                <span className="tag tag--light">UX refinements</span>
                                                                <span className="tag tag--light">flow fixes</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="row sticky row-8 bg--white process-row">
            <div className="inner">
                <div className="container">
                    <div className="flex v--stretch h--between vertical_scroll_slider">
                        <div className="left flex fd--column">
                            <div className="txt txt--l mb-24">
                                <p>Mockups hand-off</p>
                            </div>
                            <div className="num mt-auto txt txt--l color--dark-tertiary mob-hidden">
                                08                            </div>
                            
                        </div>
                        <div className="center flex fd--column v--start">
                            <div className="txt txt--m">
                                <h3>Supporting your team during build and QA</h3>
<p>We prep final files, stay available for dev questions, and review what’s built to catch mismatches early.</p>
                            </div>
                                                            <div className="list_wrap mt-64 mt-24-mob">
                                    <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                                        <p>Key steps:</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                                        <ul>
                                                                                            <li>Figma kits with tokens and specs
</li>
                                                                                            <li>Dev walkthroughs if needed
</li>
                                                                                            <li>Post-build UI checks</li>
                                                                                    </ul>   
                                    </div>
                                </div>
                                                                                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                                <p>Deliverables</p>
                            </div>
                            <div className="divider"></div>
                            <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                                                                <span className="tag tag--light">Dev specs</span>
                                                                <span className="tag tag--light">component documentation</span>
                                                                <span className="tag tag--light">QA support notes</span>
                                                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
                </>}
        <div className="space"></div>
    </div>
</section>
    
    <section className="cta  bg--white" style={{ background: 'none' }}>
        <style>{`
            .cta::before, .cta::after, .cta_content::before, .cta_content::after {
                display: none !important;
                background: none !important;
            }
        `}</style>
    <div className="container">
        <div className="cta_content" style={{ background: 'none' }}>
                            <div className="title title--m title--with-mark mt-24 mt-20-mob text--center isview slidetop new-animate">
                    <h2><span className="a-word"><span style={{ transitionDelay: "0s" }}>Ready</span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>to</span></span> <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>get</span></span> <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>a</span></span> <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>website</span></span> <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>that</span></span> <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>works,</span></span>  <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>scales,</span></span> <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>and</span></span> <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>converts?</span></span></h2>                </div>
                        <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
                <a className="btn btn--orange arr arr-right hover--dark btn--lg-desk" href="#contact-form" target="_self"><span><b>Let’s connect</b></span></a>            </div>
        </div>
    </div>
</section>
    {false && ( <section className="cases_section pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
    <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble"><h2>Featured Cases</h2></div>        <div className="mt-24 mt-16-mob mw1040 title title--xl isview slidetop new-animate trd02 inner-inherit"><span className="a-word"><span style={{ transitionDelay: "0s" }}>Discover</span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>how</span></span> <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>we’re</span></span> <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>driving</span></span> <span className="a-word"><span style={{ transitionDelay: "0.32s" }}>change</span></span> <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>through</span></span> <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>innovative</span></span> <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>projects,</span></span> <span className="a-word"><span style={{ transitionDelay: "0.64s" }}>strong</span></span> <span className="a-word"><span style={{ transitionDelay: "0.72s" }}>partnerships,</span></span> <span className="a-word"><span style={{ transitionDelay: "0.8s" }}>and</span></span> <span><span className="a-word"><span style={{ transitionDelay: "0.88s" }}>measurable</span></span> <span className="a-word"><span style={{ transitionDelay: "0.96s" }}>outcomes.</span></span></span></div> 
        <div className="txt txt--l color--dark mt-24 isview slidetop trd02 mw680"></div>                    <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
            {data.cases?.map((c: any, i: number) => (
                <div key={i} className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                    <div className="col flex v--start h--start animated-media-wrapper isview fadein">
                        <a href={c.link} className="media_wrap radius-12 ov-hidden animated-media">
                            <div className="crossfade-wrapper">
                              <img className="crossfade-img-1" src={`/work/${c.img}`} loading="lazy" decoding="async" alt={c.title} />
                              {c.img2 ? <img className="crossfade-img-2" src={`/work/${c.img2}`} loading="lazy" decoding="async" alt={c.title} /> : null}
                            </div>
                        </a>
                    </div>
                    <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                        <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                            <div className="scramble isview fadein">
                                <p>#{c.category}</p>
                            </div>
                        </div>
                        <div className="title title--m mt-12 isview slidetop new-animate fullw">
                            {c.title}
                        </div>
                        <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                            {c.tags.map((tag: string, j: number) => (
                                <span key={j} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="grid col-1 mt-64 mt-48-mob card_details isview slidetop">
                            <div className="col">
                                <div className="txt txt--control-s color--dark-secondary uppercase">
                                    Results
                                </div>
                                <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                                    <p>Delivered a highly functional product</p>
                                    <p>Improved user engagement</p>
                                </div>
                            </div>
                        </div>
                        <div className="btn--wrap isview slidetop mt-20 mt-20-mob">
                            <a href={c.link} className="btn btn--orange hover--dark arr fullw-mob"><span><b>Explore</b></span></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
            <a className="btn btn--simple dark arr" href="/work" target="_self"><span><b>Explore All Cases</b></span></a>        </div>
            </div>
</section> )}
    <section className="services_section bg--white pb-50 pb-100-mob">
    <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble mt-200">why chose us?</div>        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02 inner-inherit"><h2><span className="a-word"><span style={{ transitionDelay: "0s" }}>Your</span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>success</span></span> <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>is</span></span> <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>our</span></span> <br />
<span><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>priority</span></span></span></h2></div>                <div className="mt-40 mt-32-mob grid col-2 col-1-mob gap-12 benefits_container">
         
                        <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">
                    Design that meets regulation                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">HIPAA- and GDPR-certified expertise for Healthcare and beyond.</div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                    <p>Since 2019, we’ve gained HIPAA and GDPR certifications and industry recognition, delivering hundreds of products in Healthcare, SaaS, and EdTech — where compliance and UX go hand in hand.</p>
                </div>
               
                                
                            </div>
                        <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">
                    Design that lasts beyond trends                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">We don’t chase fads. We build digital products that stay relevant.</div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                    <p>Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.</p>
                </div>
               
                                
                            </div>
                        <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">
                    Design that’s developer-ready                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">We design for implementation, not handoff. </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                    <p>Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything’s live.</p>
                </div>
               
                                
                            </div>
                        <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary fw-600 font2">
                    Local presence. Global delivery                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">Work directly with the doers — not a chain of account managers.</div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                    <p>Collaborate with UX strategists in North America, while our senior design and development teams in Europe deliver fast, consistent results. We integrate into your tools and workflow, working as part of your team — from a single embedded designer to a full product squad.</p>
                </div>
               
                                
                            </div>
                    </div>
    </div>
</section>
    {/* <section className="testimonials_section pb-200 pb-100-mob bg--white">
    <div className="container">
        <div className="flex v--end h--between heading_wrap flex--block-mob">
            <div className="left">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop scramble">
                    what our clients say                </div>
                <div className="title title--xl mt-16 color--dark mw1040 isview slidetop new-animate trd02"><h2><span><span className="a-word"><span style={{ transitionDelay: "0s" }}>5.0</span></span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>is</span></span> <span className="a-word"><span style={{ transitionDelay: "0.16s" }}>our</span></span> <span className="a-word"><span style={{ transitionDelay: "0.24s" }}>average</span></span> <br /><span className="a-word"><span style={{ transitionDelay: "0.32s" }}>on</span></span> <span className="a-word"><span style={{ transitionDelay: "0.4s" }}>clutch</span></span> <span className="a-word"><span style={{ transitionDelay: "0.48s" }}>&amp;</span></span> <span className="a-word"><span style={{ transitionDelay: "0.56s" }}>designrush</span></span></h2></div>
            </div>
            <div className="services_cards grid col-2 gap-8 mt-32-mob">
                                <a href="https://clutch.co/profile/catalyr-studio" target="_blank" rel="nofollow" className="card bg--gray radius-12 p-12 flex fd--column isview slidetop">
                    <span className="icon">
                        <img className="visible-icon" src="images/clutch-icon.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        <img className="hover-icon" src="images/Icon.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                    </span>
                    <div className="ratings flex v--center h--between mt-auto">
                        <div className="stars flex v--center h--start gap-2">
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                    </div>
                        <div className="txt txt--caption-m color--dark-light fw-600">5.0</div>
                    </div>
                </a>
                                <a href="https://www.designrush.com/agency/profile/catalyr-studio" target="_blank" rel="nofollow" className="card bg--gray radius-12 p-12 flex fd--column isview slidetop">
                    <span className="icon">
                        <img className="visible-icon" src="images/design-icon.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                        <img className="hover-icon" src="images/icon2.svg" alt="Web App Design" loading="lazy" decoding="async" style={{}} />                    </span>
                    <div className="ratings flex v--center h--between mt-auto">
                        <div className="stars flex v--center h--start gap-2">
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                            <img src="images/star.svg" alt="star" loading="lazy" decoding="async" />
                                                    </div>
                        <div className="txt txt--caption-m color--dark-light fw-600">4.9</div>
                    </div>
                </a>
                            </div>
        </div>
        <div className="mt-40 mt-12-mob testimonials_wrap grid col-3 col-2-tablet col-1-mob gap-12">
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/1516924597216.jpeg.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>Craig Tortolani</p>
                            <span>CPO at Dekryption Labs </span>
                        </div>
                    </div>
                </div>
                                <div className="video_wrap mt-auto  isview slidetop">
                    
                        <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                            <video src="media/review-craig.mp4" className="fullw" preload="none" poster="https://cdn.catalyr.com/wp-content/uploads/2025/03/cover-craig.webp"></video>
                                                        <div className="btn-wrap">
                                <button className="btn btn--play"></button>
                            </div>
                        </div>
                    
                </div>
                                            </div>
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/1766946800665.jpeg.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>Ash Bryant</p>
                            <span>Founder of Hormn</span>
                        </div>
                    </div>
                </div>
                                                <div className="txt txt--l mt-auto pt-24 text_wrap">
                    <p>The design team is truly world-class, excelling in both user interface design and creating solutions optimized for conversion.</p>
                </div>
                            </div>
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/KlickEx.jpeg.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>KlickEx Team </p>
                            <span></span>
                        </div>
                    </div>
                </div>
                                <div className="video_wrap mt-auto  isview slidetop">
                    
                        <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                            <video src="media/klickex-review.mp4" className="fullw" preload="none" poster="https://cdn.catalyr.com/wp-content/uploads/2025/03/klickex-cover.webp"></video>
                                                        <div className="btn-wrap">
                                <button className="btn btn--play"></button>
                            </div>
                        </div>
                    
                </div>
                                            </div>
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/Rectangle-34624326.png.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1.0064102564103" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>George Fry</p>
                            <span>Founder at Neap</span>
                        </div>
                    </div>
                </div>
                                                <div className="txt txt--l mt-auto pt-24 text_wrap">
                    <p>The quality of the designs is fantastic. Catalyr works at speed and is extremely punctual with timelines. They deliver top-notch outcomes with exceptional designs.</p>
                </div>
                            </div>
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/image.png.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1.0064102564103" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>Andre Guerra</p>
                            <span>Co-Owner at RADCAT Design</span>
                        </div>
                    </div>
                </div>
                                <div className="video_wrap mt-auto  isview slidetop">
                    
                        <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                            <video src="media/radcat-review.mp4" className="fullw" preload="none" poster="https://cdn.catalyr.com/wp-content/uploads/2025/03/cover-andre-scaled.webp"></video>
                                                        <div className="btn-wrap">
                                <button className="btn btn--play"></button>
                            </div>
                        </div>
                    
                </div>
                                            </div>
                        <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                    <img className="md" src="images/1683997337066.jpeg.webp" alt="Web App Design" loading="lazy" decoding="async" style={{ aspectRatio: "1" }} />                    <div className="bio">
                        <div className="txt txt--m gap-0">
                            <p>Kevin Alvarez</p>
                            <span>Founder & General Partner, Predictive</span>
                        </div>
                    </div>
                </div>
                                                <div className="txt txt--l mt-auto pt-24 text_wrap">
                    <p>Catalyr's ability to translate concepts and rough design mock-ups into high-fidelity assets, designs, and visuals was very impressive. The goal was to maintain simple elegance in the design aesthetic, and they did it very well.</p>
                </div>
                            </div>
                    </div>
            </div>
</section> */}
    <Awards />
    <section className="pb-200 pb-100-mob bg--white">
    <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">Related services</div>        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02"><h2><span className="a-word"><span style={{ transitionDelay: "0s" }}>Looking</span></span> <span className="a-word"><span style={{ transitionDelay: "0.08s" }}>for</span></span> <span><span className="a-word"><span style={{ transitionDelay: "0.16s" }}>more?</span></span></span></h2></div>    </div>
    <div className="mt-100 mt-32-mob services_items ov-hidden">
        <div className="awards_container ov-hidden">
            <div className="grid awards_wrap col-3 col-2-tablet col-1-mob">
                                <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1 isview slidetop">
                    <div className="title title--xs color--dark">Rapid MVP development</div>
                    <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                        <p>Get your MVP 50% faster with lean sprints and pre-built frameworks.</p>
                    </div>
                    <div className="btn-wrap mt-auto pt-48">
                        <a href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/services/mvp-development/`} className="btn btn--simple dark arr"><span>Explore</span></a>
                    </div>
                </div>
                                <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2 isview slidetop">
                    <div className="title title--xs color--dark">Product redesign</div>
                    <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                        <p>Upgrade legacy interfaces with scalable, business-driven UX and Ul from a top-notch design agency.</p>
                    </div>
                    <div className="btn-wrap mt-auto pt-48">
                        <a href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/services/product-strategy/`} className="btn btn--simple dark arr"><span>Explore</span></a>
                    </div>
                </div>
                                <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3 isview slidetop">
                    <div className="title title--xs color--dark">Web development</div>
                    <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                        <p>Custom web solutions, from complex platforms to interactive dashboards and scalable SaaS products, designed to boost functionality and drive growth.</p>
                    </div>
                    <div className="btn-wrap mt-auto pt-48">
                        <a href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/services/web-development/`} className="btn btn--simple dark arr"><span>Explore</span></a>
                    </div>
                </div>
                            </div>
        </div>
    </div>
</section>
    <section className="faq_section pb-200 pb-100-mob bg--white">
    <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop"><h2>FAQ</h2></div>        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02"><span className="a-word"><span style={{ transitionDelay: "0s" }}>Questions</span></span> <span><span className="a-word"><span style={{ transitionDelay: "0.08s" }}>already</span></span> <br />
<span className="a-word"><span style={{ transitionDelay: "0.16s" }}>answered</span></span></span></div>    </div>
    <div className="faq-wrap mt-40 mt-32-mob">
        {data.faqs && data.faqs.map((faq: any, i: number) => (
            <div key={i} className="faq isview slidetop">
                <div className="container">
                    <div className="flex v--start h--between">
                        <div className="left">
                            <div className="txt txt--caption-m color--dark-light fw-600">
                                0{i + 1}
                            </div>
                        </div>
                        <div className="center">
                            <div className="txt txt--l question inner-inherit">
                                <div>{faq.q}</div>
                            </div>
                            <div className="answer_wrap">
                                <div className="answer">
                                    <div className="txt txt--m">
                                        <p><span style={{ fontWeight: "400" }}>{faq.a}</span></p>
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
</main>
    <ContactForm />
    </>
  );
}
