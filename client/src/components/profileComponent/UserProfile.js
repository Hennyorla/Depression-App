import { useSelector } from "react-redux";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userState);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className={classes.profile_block}>
            <div>
              <img
                src={require("../../Assets/dummyimage.jpeg")}
                className={classes.profile_image}
              />
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "100px" }}>
            <h3>
              {user?.firstName} {user?.lastName}
            </h3>
            <p>{user?.email}</p>
            <p>{user?.role === "professional" && "verified"}</p>

            {user?.role === "user" && (
              <div>
                <Link
                  to={"/session/chat-ai"}
                  style={{ fontSize: "50px" }}
                  title="talk to AI"
                >
                  {" "}
                  <i class="fa-solid fa-crosshairs"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
