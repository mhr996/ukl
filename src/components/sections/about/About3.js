import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
  return (
    <section className="tj-about-section-2 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
            <div
              className="about-img-area style-2 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="about-img overflow-hidden">
                <Image
                  data-speed=".8"
                  src="/images/about/about-5.webp"
                  alt=""
                  width={591}
                  height={639}
                />
              </div>
              <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
                <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                  <h4 className="title">Business Progress</h4>
                  <ul className="tj-progress-list">
                    <li>
                      <h6 className="tj-progress-title">Revenue</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">82%</span>
                        <div
                          className="tj-progress-bar"
                          data-percent="82"
                        ></div>
                      </div>
                    </li>
                    <li>
                      <h6 className="tj-progress-title">Satisfaction</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">90%</span>
                        <div
                          className="tj-progress-bar"
                          data-percent="90"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
            <div className="about-content-area">
              <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>About UKL
                </span>
                <h2 className="sec-title title-anim">
                  {type === 2 ? (
                    <>
                      Delivering Reliable Life Support and Logistics Across the
                      GCC and Middle <span>East.</span>
                    </>
                  ) : (
                    "Delivering Reliable Life Support and Logistics Across the GCC and Middle East."
                  )}
                </h2>
              </div>
            </div>
            <div className="about-bottom-area">
              <div
                className="mission-vision-box wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <h4 className="title">Our Mission</h4>
                <p className="desc">
                  We strive to fully meet our clients' requirements without
                  compromise—by delivering top-quality services, continuously
                  developing our capabilities, building long-term partnerships,
                  and offering competitive pricing that reflects true value.
                </p>
                <ul className="list-items">
                  <li>
                    <i className="tji-list"></i>Complete Client Satisfaction
                  </li>
                  <li>
                    <i className="tji-list"></i>Long-Term Partnerships
                  </li>
                  <li>
                    <i className="tji-list"></i>Competitive Pricing
                  </li>
                </ul>
              </div>
              <div
                className="mission-vision-box wow fadeInRight"
                data-wow-delay=".5s"
              >
                <h4 className="title">Our Vision</h4>
                <p className="desc">
                  We are dedicated to sustainable growth. We aim to be the most
                  trusted, reputable, and transparent life-support and logistics
                  company in our industry—recognized across the region for
                  operational rigor, innovative practices, and efficient
                  delivery.
                </p>
                <ul className="list-items">
                  <li>
                    <i className="tji-list"></i>Regional Leadership
                  </li>
                  <li>
                    <i className="tji-list"></i>Operational Rigor
                  </li>
                  <li>
                    <i className="tji-list"></i>Transparent Delivery
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
              <ButtonPrimary text={"Learn More About Us"} url={"/about"} />
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
    </section>
  );
};

export default About3;
