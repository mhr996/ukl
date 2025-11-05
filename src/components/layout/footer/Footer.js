import Link from "next/link";

const Footer = () => {
  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/images/logos/logo.webp" alt="Logos" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    From sponsorship and housing to fleet, facilities, and
                    emergency response, UKL brings 25+ years of hands-on
                    experience to deliver dependable support across the GCC and
                    Middle East.
                  </p>
                </div>
                <div className="award-logo-area">
                  <div className="award-logo">
                    <img src="/images/footer/award-logo-1.webp" alt="" />
                  </div>
                  <div className="award-logo">
                    <img src="/images/footer/award-logo-2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="footer-widget widget-nav-menu wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="title">Services</h5>
                <ul>
                  <li>
                    <Link href="/services/1">Sponsorship & GR</Link>
                  </li>
                  <li>
                    <Link href="/services/2">Housing</Link>
                  </li>
                  <li>
                    <Link href="/services/3">Fleet Management</Link>
                  </li>
                  <li>
                    <Link href="/services/4">Transportation</Link>
                  </li>
                  <li>
                    <Link href="/services/5">24/7 Emergency Response</Link>
                  </li>
                  <li>
                    <Link href="/services/6">Catering Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div
                className="footer-widget widget-nav-menu wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h5 className="title">Quick Links</h5>
                <ul>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/about">About UKL</Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      Careers <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div
                className="footer-widget widget-subscribe wow fadeInUp"
                data-wow-delay=".7s"
              >
                <h3 className="title">Get in Touch with UKL.</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                    <button type="submit">
                      <i className="tji-plane"></i>
                    </button>
                    <label htmlFor="agree">
                      <input id="agree" type="checkbox" />
                      Agree to our <Link href="#">Terms & Condition?</Link>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="footer-contact">
                  <ul>
                    <li>
                      <Link href="tel:0096566479911">
                        <span className="icon">
                          <i className="tji-phone-2"></i>
                        </span>
                        <span className="text">+965 (664) 799 11</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@kuwait-land.com">
                        <span className="icon">
                          <i className="tji-envelop-2"></i>
                        </span>
                        <span className="text">info@kuwait-land.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://web.whatsapp.com/send?phone=96566479911&text=Hello%20I%20want%20to%20get%20more%20information%20about%20Kuwait%20Land."
                        target="_blank"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://www.linkedin.com/company/united-kuwait-land/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>
                    &copy; 2025 
                    <Link
                      href="https://kuwait-land.com/portfolio"
                      target="_blank"
                    >
                      UKL
                    </Link>{" "}
                    All right reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
