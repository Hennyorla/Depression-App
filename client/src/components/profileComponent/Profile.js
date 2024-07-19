import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Professionals from "./Professional";
import Appointment from "./Appointment";
import Resources from "./Resources";
import UserProfile from "./UserProfile";
import Applications from "./Applications";
import classes from "./Profile.module.css";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showProfessionals, setShowProfessionals] = useState(false);
  const [showResources, setShowRecourses] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showApplications, setShowApplications] = useState(false);

  const { user } = useSelector((state) => state.userState);

  const showProfileHandler = () => {
    if (!showProfile) {
      setShowProfile(true);
      setShowProfessionals(false);
      setShowAppointment(false);
      setShowRecourses(false);
      setShowApplications(false);
    }
  };

  const showProfessionalsHandler = () => {
    if (!showProfessionals) {
      setShowProfile(false);
      setShowProfessionals(true);
      setShowAppointment(false);
      setShowRecourses(false);
      setShowApplications(false);
    }
  };

  const showAppointmentHandler = () => {
    if (!showAppointment) {
      setShowProfile(false);
      setShowProfessionals(false);
      setShowAppointment(true);
      setShowRecourses(false);
      setShowApplications(false);
    }
  };

  const showResourcesHandler = () => {
    if (!showResources) {
      setShowProfile(false);
      setShowProfessionals(false);
      setShowAppointment(false);
      setShowRecourses(true);
      setShowApplications(false);
    }
  };

  const showApplicationHandler = () => {
    if (!showResources) {
      setShowProfile(false);
      setShowProfessionals(false);
      setShowAppointment(false);
      setShowRecourses(false);
      setShowApplications(true);
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
            {user.role === "user" && (
              <Link
                className="btn btn-danger mb-2"
                onClick={showResourcesHandler}
              >
                Resources
              </Link>
            )}
          </div>
          <div>
            {user.role === "user" && (
              <Link
                className="btn btn-danger mb-2"
                onClick={showProfessionalsHandler}
              >
                Available Professional
              </Link>
            )}
          </div>
          <div>
            {user.role === "user" && (
              <Link
                className="btn btn-danger mb-2"
                onClick={showAppointmentHandler}
              >
                Appointment
              </Link>
            )}

            {user.role === "professional" && (
              <Link
                className="btn btn-danger mb-2"
                onClick={showAppointmentHandler}
              >
                Appointment
              </Link>
            )}

            {user.role === "admin" && (
              <Link
                className="btn btn-danger mb-2"
                onClick={showApplicationHandler}
              >
                Applications
              </Link>
            )}
          </div>
        </div>
        <div className={`${classes.profile_content} col-lg-9 p-0`}>
          {showProfile && <UserProfile />}
          {showAppointment && <Appointment />}
          {showApplications && <Applications />}
          {showProfessionals && <Professionals />}
          {showResources && <Resources />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
