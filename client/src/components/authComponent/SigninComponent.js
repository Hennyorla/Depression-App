import { Link } from "react-router-dom";

const SigninComponent = () => {
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
                  <p>Sign in to book an Appointment</p>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="con_email"
                      placeholder="password"
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Login
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
          <Link to="/get-started/reset-password">Reset Password</Link>
        </p>
      </div>
    </section>
  );
};

export default SigninComponent;
