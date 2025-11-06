"use client";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
  const handleSelect = (option) => {};
  return (
    <section className="tj-contact-section-2 section-bottom-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <h3 className="title">
                Get in Touch to Discuss Your Requirements.
              </h3>
              <form id="contact-form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="text" name="cfName" />
                      <label className="cf-label">
                        Full Name <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="email" name="cfEmail" />
                      <label className="cf-label">
                        Email Address <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="tel" name="cfPhone" />
                      <label className="cf-label">
                        Phone number <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <ReactNiceSelect
                            selectedIndex={0}
                            options={[
                              {
                                value: "0",
                                optionName: "How can we help you?",
                              },
                              {
                                value: "1",
                                optionName: "General Inquiry",
                              },
                              {
                                value: "2",
                                optionName: "Request a Quote",
                              },
                              {
                                value: "3",
                                optionName: "Service Information",
                              },
                              {
                                value: "4",
                                optionName: "Partnership Opportunities",
                              },
                              {
                                value: "5",
                                optionName: "Support & Assistance",
                              },
                              {
                                value: "6",
                                optionName: "Other",
                              },
                            ]}
                            getSelectedOption={handleSelect}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea name="cfMessage" id="message"></textarea>
                      <label className="cf-label">
                        Type message <span>*</span>
                      </label>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button className="tj-primary-btn" type="submit">
                      <span className="btn-text">
                        <span>Submit Now</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map-area wow fadeInUp" data-wow-delay=".3s">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222547.98223722356!2d47.968098!3d29.361146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf8538fa96d6bd%3A0x7823a47ad272ef5d!2sAl%20Ahleia%20Insurance%20Co.%20S.A.K.P%20-%20Soor%20Branch!5e0!3m2!1sen!2sus!4v1761829236942!5m2!1sen!2sus"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3;
