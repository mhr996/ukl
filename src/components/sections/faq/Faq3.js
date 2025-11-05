import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const Faq3 = () => {
  const items = [
    {
      title: "What services does UKL offer to clients?",
      desc: "UKL provides integrated life support and logistics services across the GCC including sponsorship and government relations, housing and accommodation, vehicles and fleet management, transportation, 24/7 emergency response, catering, event planning, and general contracting services.",
      initActive: true,
    },
    {
      title: "What industries does UKL serve?",
      desc: "We serve defense and government contracting, telecommunications and network infrastructure, energy (oil, gas, and power), and information technology sectors across Kuwait, Qatar, Saudi Arabia, UAE, Bahrain, Egypt, and Jordan.",
      initActive: false,
    },
    {
      title: "How does UKL ensure service quality?",
      desc: "Through experienced managers, trained field teams, vetted suppliers, and documented processes. Safety and quality checks are embedded into mobilization, daily operations, and closeout. We report clearly and act on feedback with continuous improvement.",
      initActive: false,
    },
    {
      title: "What makes UKL different from competitors?",
      desc: "End-to-end coverage with one accountable partner, 25+ years of regional experience, rapid mobilization capability, transparent pricing, and a culture of reliability backed by recognized registrations including SAM registration (UZARMCJTSZW5) for U.S. Department of Defense contracts.",
      initActive: false,
    },
    {
      title: "What areas does UKL operate in?",
      desc: "Kuwait and the GCC—Qatar, Saudi Arabia, the UAE, and Bahrain—with support for programs extending into Egypt and Jordan via partners. We can mobilize rapidly and scale teams to meet mission timelines across the region.",
      initActive: false,
    },
  ];
  return (
    <section className="tj-faq-section section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Common Questions
              </span>
              <h2 className="sec-title title-anim">
                Need <span>Help?</span> Start Here...
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <BootstrapWrapper>
                <div className="accordion tj-faq pt-0" id="faqTwo">
                  {items?.length
                    ? items?.map((item, idx) => (
                        <FaqItem2 key={idx} item={item} idx={idx} />
                      ))
                    : ""}
                </div>
              </BootstrapWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq3;
