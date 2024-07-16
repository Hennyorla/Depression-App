import { Link } from "react-router-dom";

const SignupComponent = () => {
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
                  <p>Sign up to book an Appointment</p>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

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
                      type="date"
                      placeholder="Date of Birth"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Register
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
          Already have an account ?{" "}
          <Link to="/get-started/signin">Sign In</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default SignupComponent;
