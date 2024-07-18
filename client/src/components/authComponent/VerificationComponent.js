import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../UI/ErrorMessage";
import { useVerifyUserMutation } from "../../lib/APIS/authApis/authApis";

const VerificationComponent = () => {
  const [verificationToken, setVerificationToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [verifyUser, { isSuccess, isLoading, isError, error }] =
    useVerifyUserMutation();

  const verifyUserHandler = async (event) => {
    event.preventDefault();
    if (!verificationToken) {
      return setErrorMessage("provide verification Token");
    }
    await verifyUser({ verificationToken });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("a_t", verificationToken);
      navigate("/get-started/set-password");
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

                  <p>Verify account with otp to continue</p>
                </div>
                {errorMessage && <ErrorMessage message={errorMessage} />}
                {isError && <ErrorMessage message={error?.data?.error} />}
                <form onSubmit={verifyUserHandler}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter OTP"
                      value={verificationToken}
                      onChange={(e) => setVerificationToken(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {isLoading ? "Please wait..." : " Verify Account"}
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
