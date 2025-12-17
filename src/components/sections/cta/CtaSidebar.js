import Link from "next/link";

const CtaSidebar = () => {
	return (
    <div className="feature-box">
      <div className="feature-content">
        <h2 className="title">Let's Talk</h2>
        <span>Give us a call</span>
        <Link className="read-more feature-contact" href="tel:+96522477790">
          <i className="tji-phone-3"></i>
          <span>+965 224 777 90</span>
        </Link>
      </div>
      <div className="feature-images">
        <img src="/images/service/service-ad.webp" alt="" />
      </div>
    </div>
  );
};

export default CtaSidebar;
