import { useState } from "react";
import { Link } from "react-router-dom";

const SelfAssessmentForm = () => {
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationalStatus, setEducationalStatus] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [dismissal, setDismissal] = useState("");
  const [sexualAbuse, setSexualAbuse] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [moodSwings, setMoodSwing] = useState("");
  const [lostLovedOnes, setLovedOnes] = useState("");
  const [platform, setPlatform] = useState("");
  // const [heartBroken, setHeartBroken] = useState(false)
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="text-center">SelfAssessmentForm</h2>
        <div className="row">
          <form>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-3">
                    <label>Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Other</option>
                    </select>
                  </div>

                  <div className="form-group  mb-3">
                    <label>Educational Status</label>
                    <select
                      className="form-control"
                      value={educationalStatus}
                      onChange={(e) => setEducationalStatus(e.target.value)}
                    >
                      <option value="">Primary</option>
                      <option value="">Secondary</option>
                      <option value="">Tertiary</option>
                      <option value="">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Marital Status</label>
                    <select
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Single</option>
                      <option value="">Married</option>
                      <option value="">Divorced</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Employment Status</label>
                    <select
                      className="form-control"
                      value={employmentStatus}
                      onChange={(e) => setEmploymentStatus(e.target.value)}
                    >
                      <option value="">Employed</option>
                      <option value="">Unemployed</option>
                      <option value="">Student</option>
                      <option value="">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Ever Being Dismissed From Work?</label>
                    <select
                      className="form-control"
                      value={dismissal}
                      onChange={(e) => setDismissal(e.target.value)}
                    >
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">other</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Have You Experienced Child Abuse?</label>
                    <select
                      className="form-control"
                      value={sexualAbuse}
                      onChange={(e) => setSexualAbuse(e.target.value)}
                    >
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-3">
                    <label>Body Weight</label>
                    <select
                      className="form-control"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    >
                      <option value="">0-50kg</option>
                      <option value="">51-70kg</option>
                      <option value="">71-100kg</option>
                      <option value="">101-150kg</option>
                      <option value="">151-200kg</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Body Height</label>
                    <select
                      className="form-control"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    >
                      <option value="">0-50cm</option>
                      <option value="">51-70cm</option>
                      <option value="">71-100cm</option>
                      <option value="">101-150cm</option>
                      <option value="">151-200cm</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label>Mood Swings</label>
                    <select
                      className="form-control"
                      value={moodSwings}
                      onChange={(e) => setMoodSwing(e.target.value)}
                    >
                      <option value="never">Never</option>
                      <option value="rarely">Rarely</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="often">Often</option>
                      <option value="always">Always</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Have You Ever Lost Someone Very Close To You?</label>
                    <select
                      className="form-control"
                      value={lostLovedOnes}
                      onChange={(e) => setLovedOnes(e.target.value)}
                    >
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label>Which Of This Platform Do You Use?</label>
                    <select
                      className="form-control"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                    >
                      <option value="">BetNaija</option>
                      <option value="">Premier Lotto</option>
                      <option value="">BetKing</option>
                      <option value="">Other</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-secondary"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </button>

                  <p>
                    Are you a professional ? <Link to="/profile">Skip</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SelfAssessmentForm;
