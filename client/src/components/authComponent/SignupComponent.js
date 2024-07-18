import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../lib/APIS/authApis/authApis";
import ErrorMessage from "../UI/ErrorMessage";
import SuccessMessage from "../UI/SuccessMessage";

const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [registerUser, { isLoading, isSuccess, isError, data, error }] =
    useRegisterUserMutation();

  const registerUserHandler = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !dob || !gender) {
      return setErrorMessage("Please fill in all fields");
    }

    await registerUser({
      firstName,
      lastName,
      email,
      dob,
      gender,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setGender("");
      navigate("/get-started/verify");
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
                  <p>Sign up to book an Appointment</p>
                </div>

                {errorMessage && <ErrorMessage message={errorMessage} />}
                {isSuccess && <SuccessMessage message={data?.message} />}
                <form onSubmit={registerUserHandler}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      type="date"
                      placeholder="Date of Birth"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {isLoading ? "Please wait..." : "Register"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="d-flex  justify-content-between">
        <p>
          Already have an account ?{" "}
          <Link to="/get-started/signin">Sign In</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default SignupComponent;
