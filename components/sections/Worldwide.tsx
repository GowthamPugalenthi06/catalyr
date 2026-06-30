import { Fragment } from "react";

export default function Worldwide() {
  return (
    <section className="locations_section pt-200 pt-100-mob">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">Worldwide, Where You Need Us</div>        
        <div className="mt-24 mw1040 title title--xl nobr-mob isview slidetop new-animate trd02">
          <span className="a-word"><span style={{transitionDelay:"0s"}}>Collaborating</span></span> <span className="a-word"><span style={{transitionDelay:"0.08s"}}>across</span></span> <span className="a-word"><span style={{transitionDelay:"0.16s"}}>borders</span></span> <span className="a-word"><span style={{transitionDelay:"0.24s"}}>to</span></span> <span className="a-word"><span style={{transitionDelay:"0.32s"}}>deliver</span></span> <span className="a-word"><span style={{transitionDelay:"0.4s"}}>seamless</span></span> <span className="a-word"><span style={{transitionDelay:"0.48s"}}>solutions</span></span> <span className="a-word"><span style={{transitionDelay:"0.56s"}}>—</span></span> <span><span className="a-word"><span style={{transitionDelay:"0.64s"}}>wherever</span></span> <span className="a-word"><span style={{transitionDelay:"0.72s"}}>you</span></span> <span className="a-word"><span style={{transitionDelay:"0.8s"}}>are</span></span></span>
        </div> 
        <div className="color--dark-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
          <div>You’ll collaborate with project leads based near your region in the USA, UK, UAE, and Singapore, while your design & development team works from our core hub in India. This setup gives you the proximity and trust of a local partner with the efficiency and speed of a global team.</div>
        </div>    
      </div>
      <div className="map_wrap mt-48">
        <div className="container">
          <div className="pt-28 pt-0-mob fd--column-mob flex v--start gap-90 gap-48-mob">
            <div className="left grid gap-60 gap-48-mob">
              <div className="row">
                <div className="title title--xs isview slidetop color--dark">USA, UK, UAE & Singapore</div>
                <div className="styled_ul_wrap font1 mt-24 isview slidetop color--dark-light visible">
                  <ul>
                    <li>Client-facing</li>
                    <li>Strategy & discovery</li>
                    <li>Product leads</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="title title--xs isview slidetop color--dark">India</div>
                <div className="styled_ul_wrap font1 mt-24 isview slidetop color--dark-light visible">
                  <ul>
                    <li>UX/UI design</li>
                    <li>Development</li>
                    <li>Branding & motion design</li>
                    <li>Marketing & growth</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right" style={{ position: 'relative' }}>
              <picture className="image">
                <img
                  className="fullw cover"
                  src="/images/Frame-2131329712.svg"
                  alt="Worldwide Locations"
                  loading="lazy"
                />
              </picture>
              

            </div>
          </div>
        </div>  
      </div>
    </section>
  );
}
