import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApplyForProfessionalMutation } from "../../lib/APIS/professionalApis/professionalApis";
import ErrorMessage from "../UI/ErrorMessage";

const ApplyProf = () => {
  const [cv, setCv] = useState("");
  const [specialities, setSpecialities] = useState("");
  const [experience, setExperience] = useState(0);
  const [summary, setSummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [applyForProfessional, { isError, isSuccess, data, error, isLoading }] =
    useApplyForProfessionalMutation();

  const onSelectFile = (event) => {
    const onLoadFn = (dataURL) => {
      const type = atob(btoa(dataURL)).split(":")[1].split(";")[0];

      if (
        type !== "image/png" &&
        type !== "image/jpg" &&
        type !== "image/jpeg" &&
        type !== "application/pdf"
      ) {
        return setErrorMessage("Invalid file format");
      }

      setErrorMessage("");
    };

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onLoadFn(reader.result));
      reader.readAsDataURL(event.target.files[0]);
      setCv(event.target.files[0]);
    }
  };

  const onApplyForForprofessional = async (event) => {
    event.preventDefault();
    if (!cv || cv.length === 0) {
      return setErrorMessage("Select a file");
    }

    if (
      cv.type !== "image/png" &&
      cv.type !== "image/jpg" &&
      cv.type !== "image/jpeg" &&
      cv.type !== "application/pdf"
    ) {
      return setErrorMessage("invalid file format");
    }

    const formData = new FormData();
    formData.append("cv", cv);
    formData.append("specialities", specialities);
    formData.append("experience", experience);
    formData.append("summary", summary);

    await applyForProfessional(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess]);

  console.log(error);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="appointment-form">
            <div className="section-title">
              <h2 className="title">
                <span>Are you a </span> Professional
              </h2>
              <p> Register to Apply</p>

              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
            <form onSubmit={onApplyForForprofessional}>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onInput={onSelectFile}
                />
              </div>

              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(event) => setSpecialities(event.target.value)}
                >
                  <option value="Psychologists">Psychologists</option>
                  <option value="Psychiatrists">Psychiatrists</option>
                  <option value="Psychoanalyst">Psychoanalyst</option>
                  <option value="Psychiatric nurse">Psychiatric Nurse</option>
                  <option value="Psychotherapist">Psychotherapist</option>
                  <option value="Counselors and counseling">
                    Counselors and counseling
                  </option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Experience"
                  onChange={(event) => setExperience(event.target.value)}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  onChange={(event) => setSummary(event.target.value)}
                  rows={5}
                  cols={10}
                ></textarea>
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
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default ApplyProf;
