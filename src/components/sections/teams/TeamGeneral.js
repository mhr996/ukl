"use client";

const TeamGeneral = () => {
  return (
    <section className="tj-team-general-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center mb-60">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Our Team
              </span>
              <h2 className="sec-title title-anim">
                The People Behind <span>UKL's Success</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row mb-60">
          <div className="col-lg-6">
            <div
              className="team-content-wrapper wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <h3 className="team-content-title mb-30">
                Experienced Professionals Delivering Excellence
              </h3>
              <p className="mb-20">
                At United Kuwait Land, our team brings together decades of
                collective experience in business support services across the
                GCC & MENA. Our professionals are dedicated to understanding
                your unique challenges and delivering solutions that exceed
                expectations.
              </p>
              <p className="mb-20">
                From sponsorship specialists and housing coordinators to fleet
                managers and emergency response teams, every member of UKL is
                committed to operational excellence and client satisfaction.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="team-content-wrapper wow fadeInRight"
              data-wow-delay=".5s"
            >
              <h3 className="team-content-title mb-30">Our Core Values</h3>
              <ul className="team-values-list">
                <li style={{ marginBottom: 20 }}>
                  <div className="value-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="value-content">
                    <h5>Reliability</h5>
                    <p>
                      Consistent, dependable service delivery you can count on
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: 20 }}>
                  <div className="value-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="value-content">
                    <h5>Expertise</h5>
                    <p>
                      Deep regional knowledge and industry-specific experience
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: 20 }}>
                  <div className="value-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="value-content">
                    <h5>Responsiveness</h5>
                    <p>24/7 availability and rapid problem resolution</p>
                  </div>
                </li>
                <li style={{ marginBottom: 20 }}>
                  <div className="value-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="value-content">
                    <h5>Integrity</h5>
                    <p>Transparent operations and ethical business practices</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="team-feature-box wow fadeInUp" data-wow-delay=".3s">
              <div className="feature-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <h4 className="feature-title">25+ Years of Experience</h4>
              <p className="feature-desc">
                Our leadership team has been serving clients across the GCC & MENA
                since 1998, building deep expertise in regional operations and
                compliance.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-feature-box wow fadeInUp" data-wow-delay=".5s">
              <div className="feature-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h4 className="feature-title">Multilingual Support</h4>
              <p className="feature-desc">
                Our diverse team speaks English, Arabic, and multiple regional
                languages, ensuring clear communication across all operations.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-feature-box wow fadeInUp" data-wow-delay=".7s">
              <div className="feature-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h4 className="feature-title">24/7 Dedicated Teams</h4>
              <p className="feature-desc">
                Round-the-clock teams across operations, emergency response, and
                client support ensure we're always available when you need us.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-60">
          <div className="col-12">
            <div
              className="team-expertise-area wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="text-center mb-40">Our Team Expertise</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="expertise-card">
                    <div className="expertise-number">70+</div>
                    <h5>Skilled Professionals</h5>
                    <p>Dedicated team members across all service divisions</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="expertise-card">
                    <div className="expertise-number">10</div>
                    <h5>Countries Covered</h5>
                    <p>Regional presence throughout the GCC & MENA</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-30">
                  <div className="expertise-card">
                    <div className="expertise-number">180+</div>
                    <h5>Active Projects</h5>
                    <p>Ongoing support operations managed simultaneously</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-60">
          <div className="col-12">
            <div
              className="team-cta-box text-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="mb-20">Join Our Growing Team</h3>
              <p className="mb-30">
                We're always looking for talented professionals to join UKL. If
                you're passionate about delivering exceptional service and want
                to be part of a dynamic, growing organization, we'd love to hear
                from you.
              </p>
              <a href="mailto:hr@kuwait-land.com" className="tj-primary-btn">
                <span className="btn-text">
                  <span>Contact HR Department</span>
                </span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGeneral;
