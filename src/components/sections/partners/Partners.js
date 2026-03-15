import Link from "next/link";

const partners = [
  {
    name: "IT Defense",
    logo: "/images/partners/it-defense.png",
    url: "https://www.itcdefense.com/",
  },
  {
    name: "Trace System",
    logo: "/images/partners/Trace-System.png",
    url: "https://www.tracesystems.com/",
  },
  {
    name: "L3Harris",
    logo: "/images/partners/l3.png",
    url: "https://www.l3harris.com/",
  },
  {
    name: "Accenture Federal Services",
    logo: "/images/partners/Accenture-federal-services.png",
    url: "https://www.accenture.com/ae-en",
  },
  {
    name: "General Dynamics Information Technology",
    logo: "/images/partners/General-Dynamics-Information-Technology.png",
    url: "https://www.gdit.com/about-gdit/",
  },
  {
    name: "Raytheon",
    logo: "/images/partners/Raytheon.png",
    url: "https://www.rtx.com/raytheon",
  },
  {
    name: "Oreca International",
    logo: "/images/partners/Oreca-International.png",
    url: "https://orcaim.com/",
  },
  {
    name: "Atlantic Corporation",
    logo: "/images/partners/Atlantic-cmyk.avif",
    url: "https://www.atlanticcorporation.com/",
  },
  {
    name: "CACI",
    logo: "/images/partners/CACI.png",
    url: "https://www.caci.com/",
  },
  {
    name: "SAIC",
    logo: "/images/partners/SAIC.png",
    url: "https://www.saic.com/",
  },
  {
    name: "Medweb",
    logo: "/images/partners/Medweb.png",
    url: "https://www.medweb.com/",
  },
  {
    name: "Worlds",
    logo: "/images/partners/Worlds.png",
    url: "https://www.worlds.io/",
  },
  {
    name: "PAI-inc",
    logo: "/images/partners/PAI-inc.png",
    url: "https://www.pai-inc.com/",
  },
  {
    name: "TribalCo",
    logo: "/images/partners/TribalCo.png",
    url: "https://www.tribalco.com/",
  },
  {
    name: "SEV1TECH",
    logo: "/images/partners/SEV1TECH.png",
    url: "https://sev1tech.com/",
  },
  {
    name: "Geodesicx",
    logo: "/images/partners/Geodesicx.png",
    url: "https://geodesicx.com/",
  },
];

const Partners = () => {
  return (
    <section className="tj-partners-section section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Trusted Collaborators
              </span>
              <h2 className="sec-title title-anim">
                Our <span>Partners.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="partners-grid wow fadeInUp" data-wow-delay=".4s">
              {partners.map((partner, idx) => (
                <Link
                  key={idx}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-item"
                >
                  <img src={partner.logo} alt={partner.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
