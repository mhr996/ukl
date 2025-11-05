import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
  const features = [
    {
      title: "End-to-End Coverage",
      desc: "One accountable partner reduces handoffs, delays, and risk. From sponsorship and housing to fleet, facilities, and emergency response.",
      icon: "tji-innovative",
    },
    {
      title: "Regional Reach",
      desc: "Established operations across the GCC with mobilization capability. Operating in Kuwait, Qatar, Saudi Arabia, UAE, Bahrain, Egypt, and Jordan.",
      icon: "tji-award",
    },
    {
      title: "24/7 Readiness",
      desc: "Trained teams, clear escalation paths, and continuity planning. Around-the-clock support for incidents and urgent needs, every day of the week.",
      icon: "tji-support",
    },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {type == 2 ? (
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Why Choose UKL
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      Empowering Operations with <span>Expertise.</span>
                    </h2>
                  </div>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <ButtonPrimary text="Request a Call" url="/contact" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Why Choose UKL
                </span>
                <h2 className="sec-title title-anim">
                  Empowering Operations with <span>Expertise.</span>
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-4">
              <FeatureCard feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
