import { useState } from "react";
import { Link } from "react-router-dom";
import Professionals from "./Professional";
import Appointment from "./Appointment";
import Resources from "./Resources";
import UserProfile from "./UserProfile";
import classes from "./Profile.module.css";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showProfessionals, setShowProfessionals] = useState(false);
  const [showResources, setShowRecourses] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  const showProfileHandler = () => {
    if (!showProfile) {
      setShowProfile(true);
      setShowProfessionals(false);
      setShowAppointment(false);
      setShowRecourses(false);
    }
  };

  const showProfessionalsHandler = () => {
    if (!showProfessionals) {
      setShowProfile(false);
      setShowProfessionals(true);
      setShowAppointment(false);
      setShowRecourses(false);
    }
  };

  const showAppointmentHandler = () => {
    if (!showAppointment) {
      setShowProfile(false);
      setShowProfessionals(false);
      setShowAppointment(true);
      setShowRecourses(false);
    }
  };

  const showResourcesHandler = () => {
    if (!showResources) {
      setShowProfile(false);
      setShowProfessionals(false);
      setShowAppointment(false);
      setShowRecourses(true);
    }
  };

  return (
    <section className={`${classes.profile_container} container-fluid`}>
      <div className="row">
        <div className={`${classes.profile_options} col-lg-3`}>
          <div>
            <Link className="btn btn-danger mb-2" onClick={showProfileHandler}>
              My Profile
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-danger mb-2"
              onClick={showResourcesHandler}
            >
              Resources
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-danger mb-2"
              onClick={showProfessionalsHandler}
            >
              Available Professional
            </Link>
          </div>
          <div>
            <Link
              className="btn btn-danger mb-2"
              onClick={showAppointmentHandler}
            >
              Appointment
            </Link>
          </div>
        </div>
        <div className={`${classes.profile_content} col-lg-9`}>
          {showProfile && <UserProfile />}
          {showAppointment && <Appointment />}
          {showProfessionals && <Professionals />}
          {showResources && <Resources />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
