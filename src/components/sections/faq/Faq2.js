import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1, limit }) => {
  const allItems = [
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
    {
      title: "How can clients partner with UKL?",
      desc: "Engage via Master Service Agreement (MSA) with call-off scopes, project-based engagements with defined deliverables, or retainers for government relations, housing management, or fleet operations. Share timelines and requirements and we'll propose a plan with milestones, SLAs, and pricing.",
      initActive: false,
    },
    {
      title: "Is UKL registered for international contracting?",
      desc: "Yes. UKL is registered in the U.S. System for Award Management (SAM) to support U.S. companies under U.S. Department of Defense contracts. Our SAM Registration Number is UZARMCJTSZW5.",
      initActive: false,
    },
    {
      title: "How quickly can UKL mobilize?",
      desc: "Standard scopes can mobilize within days. Complex, multi-site programs follow a phased plan sequencing permits, housing, fleet, and staffing. We plan ahead, manage risk, and make decisions with clarity and data to ensure timely deployment.",
      initActive: false,
    },
    {
      title: "What documentation does UKL provide?",
      desc: "Onboarding checklists, government relations records, asset registers, HSE documentation, service reports, and closeout summaries aligned with requirements. All operational records are maintained and shared in line with contract requirements.",
      initActive: false,
    },
    {
      title: "Does UKL work with client HSE systems?",
      desc: "Yes. We align with client QHSE systems and local authority standards. We can implement additional controls where the risk profile requires it. Our teams follow documented procedures, conduct toolbox talks, review incidents, and close corrective actions.",
      initActive: false,
    },
    {
      title: "Can UKL support urgent or after-hours requests?",
      desc: "Yes. We maintain 24/7 availability with services available around the clock, every day of the week. Urgent requests are triaged and routed to the appropriate team with clear escalation paths for immediate action including hospital assistance, police coordination, and emergency transport.",
      initActive: false,
    },
  ];

  const items = limit ? allItems.slice(0, limit) : allItems;

  return (
    <section
      className={`tj-faq-section section-gap  ${
        type === 3 || type === 4 ? "" : "tj-arrange-container-2"
      }`}
    >
      <div className="container">
        <div className="row justify-content-between">
          {type === 3 ? (
            <div className="col-lg-4">
              <div className="content-wrap">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box"></i>Common Questions
                  </span>
                  <h2 className="sec-title title-anim">
                    Need <span>Help?</span> Start Here...
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  We stay ahead of curve, leveraging <br /> cutting-edge are
                  technologies and <br /> strategies to competitive
                </p>
                <div className="wow fadeInUp" data-wow-delay=".8s">
                  <ButtonPrimary text={"Request a Call"} url={"/contact"} />
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6">
              <div
                className={`faq-img-area ${
                  type === 3 ? "" : "tj-arrange-item-2"
                }`}
              >
                <div className="faq-img overflow-hidden">
                  <Image
                    src="/images/faq/faq.webp"
                    alt=""
                    width={585} 
                    height={629}
                  />
                  <h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
                    Need Help? Start Here...
                  </h2>
                </div>
                <div className="box-area ">
                  <div className="call-box">
                    <h4 className="title">
                      Get Started
                      <br />
                      Get us a Call?{" "}
                    </h4>
                    <span className="call-icon">
                      <i className="tji-phone"></i>
                    </span>
                    <Link className="number" href="tel:0096565710408">
                      <span>+965-657-104-08</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`col-lg-${type === 3 ? "8" : "6"}`}>
            <BootstrapWrapper>
              <div
                className={`accordion tj-faq ${
                  type === 2 || type === 4 ? "style-2" : ""
                } ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
                id="faqOne"
              >
                {items?.length
                  ? items?.map((item, idx) => (
                      <FaqItem key={idx} item={item} idx={idx} />
                    ))
                  : ""}
              </div>
            </BootstrapWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq2;
