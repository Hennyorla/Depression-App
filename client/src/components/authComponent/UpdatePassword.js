import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../UI/ErrorMessage";
import { useSetNewPasswordMutation } from "../../lib/APIS/authApis/authApis";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [setNewPassword, { isError, isSuccess, error, isLoading, data }] =
    useSetNewPasswordMutation();

  const updatePasswordHandler = async (event) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      return setErrorMessage("all fields are required");
    }

    await setNewPassword({
      password,
      confirmPassword,
      verificationToken: localStorage.getItem("a_t"),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("a_t");
      navigate("/get-started/signin");
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
                  <p>Update your password to complete Registration</p>

                  {errorMessage && <ErrorMessage message={errorMessage} />}
                  {isError && (
                    <ErrorMessage
                      message={error?.data?.error || "something went wrong"}
                    />
                  )}
                </div>

                <form onSubmit={updatePasswordHandler}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {isLoading ? "Please wait..." : " Update Password"}
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
      </div>
    </section>
  );
};

export default UpdatePassword;
