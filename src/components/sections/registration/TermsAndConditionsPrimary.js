import Link from "next/link";

const TermsAndConditionsPrimary = () => {
  return (
    <section className="terms-and-conditions section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="terms-and-conditions-wrapper">
              <div>
                <h2>
                  Terms &amp; Conditions{" "}
                  <span className="pill">United Kuwait Land (UKL)</span>
                </h2>
                <p className="muted">Last updated: November 6, 2025</p>
                <p>
                  Welcome to <strong>United Kuwait Land (UKL)</strong>. These
                  Terms &amp; Conditions govern your use of our services and
                  website. By engaging with UKL services or using our website,
                  you agree to be bound by these Terms. Please read them
                  carefully before proceeding.
                </p>
                <div className="note">
                  <strong>Important:</strong> UKL provides comprehensive
                  business support services including sponsorship, government
                  relations, housing, fleet management, transportation,
                  emergency support, catering, events management, and
                  contracting services across the GCC and Middle East region.
                </div>
              </div>

              <nav className="toc" aria-label="Table of contents">
                <h2>Table of Contents</h2>
                <ol>
                  <li>
                    <button
                      className="tj-scroll-btn"
                      data-target="#definitions"
                    >
                      Definitions
                    </button>
                  </li>
                  <li>
                    <button className="tj-scroll-btn" data-target="#services">
                      Services Offered
                    </button>
                  </li>
                  <li>
                    <button
                      className="tj-scroll-btn"
                      data-target="#client-obligations"
                    >
                      Client Obligations
                    </button>
                  </li>
                  <li>
                    <button className="tj-scroll-btn" data-target="#payment">
                      Payment Terms
                    </button>
                  </li>
                  <li>
                    <button className="tj-scroll-btn" data-target="#liability">
                      Liability &amp; Warranties
                    </button>
                  </li>
                  <li>
                    <button
                      className="tj-scroll-btn"
                      data-target="#confidentiality"
                    >
                      Confidentiality
                    </button>
                  </li>
                  <li>
                    <button
                      className="tj-scroll-btn"
                      data-target="#termination"
                    >
                      Termination
                    </button>
                  </li>
                  <li>
                    <button
                      className="tj-scroll-btn"
                      data-target="#governing-law"
                    >
                      Governing Law
                    </button>
                  </li>
                </ol>
              </nav>

              <div id="definitions">
                <h3>1. Definitions</h3>
                <p>
                  <strong>"UKL", "We", "Us", "Our"</strong> refers to{" "}
                  <em>United Kuwait Land</em>, a business support services
                  provider operating in Kuwait and the broader GCC region.
                </p>
                <p>
                  <strong>"Client", "You", "Your"</strong> refers to any
                  individual or organization that engages UKL's services or uses
                  our website.
                </p>
                <p>
                  <strong>"Services"</strong> refers to all business support
                  services provided by UKL, including but not limited to
                  sponsorship, government relations, housing, fleet management,
                  transportation, emergency support, catering, events
                  management, and contracting.
                </p>
                <p>
                  <strong>"Agreement"</strong> means these Terms &amp;
                  Conditions together with any service-specific contracts or
                  work orders executed between UKL and the Client.
                </p>
              </div>

              <div id="services">
                <h3>2. Services Offered</h3>
                <p>
                  UKL provides a comprehensive range of business support
                  services designed to help organizations operate efficiently
                  across the GCC and Middle East:
                </p>
                <ul>
                  <li>
                    <strong>Sponsorship &amp; Government Relations:</strong>{" "}
                    Visa processing, work permits, government licensing, and
                    regulatory compliance support.
                  </li>
                  <li>
                    <strong>Housing Solutions:</strong> Accommodation sourcing,
                    facility management, and housing administration for
                    personnel.
                  </li>
                  <li>
                    <strong>Fleet Management:</strong> Vehicle procurement,
                    maintenance, tracking, and comprehensive fleet operations.
                  </li>
                  <li>
                    <strong>Transportation Services:</strong> Personnel
                    transport, logistics coordination, and route planning.
                  </li>
                  <li>
                    <strong>Emergency Support Services:</strong> 24/7 rapid
                    response, crisis management, and emergency coordination.
                  </li>
                  <li>
                    <strong>Catering Services:</strong> Food service management,
                    catering operations, and nutritional planning.
                  </li>
                  <li>
                    <strong>Events Management:</strong> Corporate events,
                    conferences, and special occasion planning and execution.
                  </li>
                  <li>
                    <strong>Contracting Services:</strong> General contracting,
                    facility maintenance, and construction support.
                  </li>
                </ul>
                <p>
                  Service scope, deliverables, and pricing are defined in
                  individual service agreements or work orders. UKL reserves the
                  right to modify service offerings with reasonable notice to
                  existing clients.
                </p>
              </div>

              <div id="client-obligations">
                <h3>3. Client Obligations</h3>
                <p>Clients engaging UKL services agree to:</p>
                <ul>
                  <li>
                    Provide accurate, complete, and timely information necessary
                    for service delivery.
                  </li>
                  <li>
                    Comply with all applicable laws, regulations, and local
                    requirements in the jurisdictions where services are
                    provided.
                  </li>
                  <li>
                    Cooperate with UKL personnel and provide reasonable access
                    to facilities, documentation, and resources as needed.
                  </li>
                  <li>
                    Notify UKL promptly of any changes to requirements, contact
                    information, or circumstances that may affect service
                    delivery.
                  </li>
                  <li>
                    Maintain appropriate insurance coverage for personnel,
                    property, and operations as required by law or contract.
                  </li>
                  <li>
                    Honor payment obligations in accordance with agreed terms.
                  </li>
                </ul>
              </div>

              <div id="payment">
                <h3>4. Payment Terms</h3>
                <p>
                  <strong>Pricing:</strong> Service fees are detailed in
                  individual contracts or work orders. Prices are subject to
                  change with 30 days' written notice for ongoing services.
                </p>
                <p>
                  <strong>Payment Schedule:</strong> Unless otherwise specified,
                  invoices are due within 30 days of issuance. Late payments may
                  incur interest charges at the rate of 1.5% per month or the
                  maximum allowed by law, whichever is lower.
                </p>
                <p>
                  <strong>Deposits:</strong> UKL may require advance payment or
                  deposits for certain services, particularly those involving
                  third-party costs, equipment procurement, or facility
                  arrangements.
                </p>
                <p>
                  <strong>Expenses:</strong> Clients are responsible for
                  reimbursing reasonable out-of-pocket expenses incurred in
                  service delivery, including but not limited to government
                  fees, permits, specialized equipment, and travel costs when
                  required.
                </p>
              </div>

              <div id="liability">
                <h3>5. Liability &amp; Warranties</h3>
                <p>
                  <strong>Service Warranty:</strong> UKL commits to providing
                  services with reasonable skill, care, and professionalism in
                  accordance with industry standards. We make best efforts to
                  ensure service quality but do not guarantee specific outcomes
                  beyond our direct control.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> To the maximum
                  extent permitted by law, UKL's total liability for any claims
                  arising from services shall not exceed the fees paid by the
                  Client for the specific service giving rise to the claim
                  during the 12 months preceding the claim.
                </p>
                <p>
                  <strong>Exclusions:</strong> UKL is not liable for:
                </p>
                <ul>
                  <li>
                    Delays or failures caused by government actions, regulatory
                    changes, force majeure events, or circumstances beyond our
                    reasonable control.
                  </li>
                  <li>
                    Losses arising from Client's failure to provide accurate
                    information, comply with requirements, or follow UKL's
                    recommendations.
                  </li>
                  <li>
                    Indirect, consequential, or punitive damages including lost
                    profits, business interruption, or reputational harm.
                  </li>
                  <li>
                    Actions or omissions of third-party service providers,
                    government agencies, or other parties outside UKL's direct
                    supervision.
                  </li>
                </ul>
                <p>
                  <strong>Insurance:</strong> UKL maintains appropriate
                  insurance coverage for our operations. Clients requiring
                  specific insurance certificates or additional coverage should
                  request them at the time of contracting.
                </p>
              </div>

              <div id="confidentiality">
                <h3>6. Confidentiality</h3>
                <p>
                  Both parties agree to maintain confidentiality of proprietary
                  information, business data, and sensitive details shared
                  during the course of service delivery. This obligation
                  survives termination of services for a period of 3 years.
                </p>
                <p>
                  <strong>Exceptions:</strong> Confidentiality obligations do
                  not apply to information that:
                </p>
                <ul>
                  <li>
                    Is publicly available or becomes public through no fault of
                    the receiving party.
                  </li>
                  <li>Was rightfully possessed prior to disclosure.</li>
                  <li>
                    Is independently developed without use of confidential
                    information.
                  </li>
                  <li>
                    Must be disclosed by law, regulation, or court order (with
                    notice to the disclosing party when legally permissible).
                  </li>
                </ul>
                <p>
                  UKL may share Client information with subcontractors,
                  partners, or government agencies as necessary to deliver
                  services, provided such parties are bound by similar
                  confidentiality obligations.
                </p>
              </div>

              <div id="termination">
                <h3>7. Termination</h3>
                <p>
                  <strong>Termination by Client:</strong> Clients may terminate
                  services with 30 days' written notice. Early termination may
                  result in charges for committed resources, non-refundable
                  third-party costs, and reasonable wind-down expenses.
                </p>
                <p>
                  <strong>Termination by UKL:</strong> UKL may terminate
                  services with 30 days' notice or immediately if:
                </p>
                <ul>
                  <li>
                    Client fails to make payment within 60 days of due date.
                  </li>
                  <li>Client breaches material terms of the Agreement.</li>
                  <li>
                    Client engages in illegal, fraudulent, or unethical conduct.
                  </li>
                  <li>
                    Continuation of services becomes impractical due to
                    circumstances beyond UKL's control.
                  </li>
                </ul>
                <p>
                  <strong>Post-Termination:</strong> Upon termination, Client
                  remains liable for all fees for services rendered up to the
                  termination date, plus any outstanding expenses. UKL will
                  assist with reasonable transition activities as mutually
                  agreed.
                </p>
              </div>

              <div id="governing-law">
                <h3>8. Governing Law &amp; Dispute Resolution</h3>
                <p>
                  These Terms are governed by the laws of Kuwait. Any disputes
                  arising from or relating to UKL services shall be resolved
                  through the following process:
                </p>
                <ol>
                  <li>
                    <strong>Negotiation:</strong> Parties shall first attempt to
                    resolve disputes through good-faith negotiation between
                    senior representatives.
                  </li>
                  <li>
                    <strong>Mediation:</strong> If negotiation fails within 30
                    days, parties may engage a mutually acceptable mediator.
                  </li>
                  <li>
                    <strong>Arbitration/Litigation:</strong> Unresolved disputes
                    shall be settled by arbitration in Kuwait under the rules of
                    the Kuwait Chamber of Commerce and Industry, or through the
                    courts of Kuwait as appropriate to the nature and value of
                    the dispute.
                  </li>
                </ol>
                <p>
                  <strong>Language:</strong> These Terms may be translated for
                  convenience, but the English version shall prevail in case of
                  any conflict or ambiguity.
                </p>
              </div>

              <div className="note">
                <h3>Contact Information</h3>
                <p>
                  For questions regarding these Terms &amp; Conditions or UKL
                  services, please contact us:
                </p>
                <p>
                  <strong>United Kuwait Land (UKL)</strong>
                  <br />
                  Email:{" "}
                  <Link href="mailto:info@kuwait-land.com">
                    info@kuwait-land.com
                  </Link>
                  <br />
                  Phone: <Link href="tel:0096566479911">+965 (664) 799 11</Link>
                  <br />
                  Website:{" "}
                  <Link href="https://kuwait-land.com">kuwait-land.com</Link>
                </p>
              </div>

              <p className="muted">
                <small>
                  These Terms &amp; Conditions constitute a binding agreement
                  between UKL and its clients. By engaging our services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms. UKL reserves the right to update these
                  Terms with reasonable notice to clients. Continued use of
                  services after such updates constitutes acceptance of the
                  revised Terms.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPrimary;
