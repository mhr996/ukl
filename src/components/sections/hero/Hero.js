import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="tj-banner-section section-gap-x">
      <div className="banner-area">
        <div className="banner-left-box">
          <div className="banner-content">
            <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
              <i className="tji-excellence"></i> Integrated Life Support and
              Logistics
            </span>
            <h1 className="banner-title title-anim">
              Operational Certainty Across the <span>GCC.</span>
            </h1>
            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
              <Link className="banner-link" href="/about">
                <span>
                  <i className="tji-arrow-right-big"></i>
                </span>
              </Link>
              <div className="banner-desc">
                Life support and logistics delivered safely, on time, every
                time. One accountable partner for sponsorship, accommodation,
                vehicles, transport, facilities, and emergency support.
              </div>
            </div>
          </div>
          <div className="banner-shape">
            <img src="/images/shape/pattern-bg.webp" alt="" />
          </div>
        </div>
        <div className="banner-right-box">
          <div className="banner-img">
            <Image
              data-speed="0.8"
              src="/images/hero/hero-img.webp"
              alt=""
              width={945}
              height={793}
            />
          </div>
          <div className="box-area">
            <div className="customers-box">
              <div className="customers">
                <ul>
                  <li className="wow fadeInLeft" data-wow-delay=".5s">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "var(--tj-color-theme-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #fff",
                      }}
                    >
                      <i
                        className="fa-solid fa-shield-check"
                        style={{ fontSize: "28px", color: "#ffffff" }}
                      ></i>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".6s">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "var(--tj-color-theme-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #fff",
                      }}
                    >
                      <i
                        className="fa-solid fa-handshake"
                        style={{ fontSize: "28px", color: "#ffffff" }}
                      ></i>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".7s">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "var(--tj-color-theme-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #fff",
                      }}
                    >
                      <i
                        className="fa-solid fa-award"
                        style={{ fontSize: "28px", color: "#ffffff" }}
                      ></i>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".8s">
                    <span>
                      <i className="tji-plus"></i>
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="customers-number wow fadeInUp"
                data-wow-delay=".5s"
              >
                25+
              </div>
              <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">
                Years of experience in life support and logistics.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
        <button data-target="#choose" className="scroll-down tj-scroll-btn">
          <span>
            <i className="tji-arrow-down-long"></i>
          </span>
          Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;
