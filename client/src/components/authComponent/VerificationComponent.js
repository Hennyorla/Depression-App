import { Link } from "react-router-dom";

const VerificationComponent = () => {
  return (
    <section className="appointment-area" data-bg-color="#f3f3f3">
      <div className="appointment-form-style1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="appointment-form">
                <div className="section-title">
                  <h2 className="title">
                    <span>We are</span> Always Ready to Help you
                  </h2>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter OTP"
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Verify Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex  justify-content-between">
        <p>
          Don't have an account ? <Link to="/get-started/signup">Sign Up</Link>{" "}
        </p>

        <p>
          Already have an account ?{" "}
          <Link to="/get-started/signup">Sign In</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default VerificationComponent;
