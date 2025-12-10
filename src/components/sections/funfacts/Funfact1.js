import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
  return (
    <div className="tj-countup-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countup-wrap">
              <div className="countup-item">
                <FunfactSingle currentValue={200} symbol={"+"} />

                <span className="count-text">Projects Completed</span>
                <span
                  className="count-separator"
                  style={{
                    backgroundImage: "url('/images/shape/separator.svg')",
                  }}
                ></span>
              </div>
              <div className="countup-item">
                <FunfactSingle currentValue={10} symbol={"M+"} />
                <span className="count-text">Reach Worldwide</span>
                <span
                  className="count-separator"
                  style={{
                    backgroundImage: "url('/images/shape/separator.svg')",
                  }}
                ></span>
              </div>
              <div className="countup-item">
                <FunfactSingle currentValue={8} symbol={"+"} />
                <span className="count-text">Countries Across the Region</span>
                <span
                  className="count-separator"
                  style={{
                    backgroundImage: "url('/images/shape/separator.svg')",
                  }}
                ></span>
              </div>
              <div className="countup-item">
                <FunfactSingle currentValue={25} symbol={"+"} />
                <span className="count-text">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfact1;
