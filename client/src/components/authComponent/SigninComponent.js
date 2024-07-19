import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../lib/APIS/authApis/authApis";
import ErrorMessage from "../UI/ErrorMessage";

const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginUser, { isLoading, isError, error, isSuccess, data }] =
    useLoginUserMutation();

  const loginUserHandler = async (event) => {
    event.preventDefault();

    await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("r_t", data?.refreshToken);
      setTimeout(() => {
        navigate("/self-assessment");
      }, 500);
    }
  }, [isSuccess]);

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

                  {isError && (
                    <ErrorMessage
                      message={
                        error?.data?.error ||
                        error?.error ||
                        "something went wrong"
                      }
                    />
                  )}
                </div>
                <form onSubmit={loginUserHandler}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="con_email"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {isLoading ? "Please wait... " : "Login"}
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
