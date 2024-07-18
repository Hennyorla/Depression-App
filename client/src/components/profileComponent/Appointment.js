import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllSessionsMutation } from "../../lib/APIS/sessionApi/sessionApis";

const Appointment = () => {
  const [getAllSessions, { data, isLoading }] = useGetAllSessionsMutation();

  useEffect(() => {
    getAllSessions();
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {data?.length > 0 &&
          data.map((session) => {
            return (
              <div className="col-lg-4" key={session._id}>
                <div class="card" style={{ width: "100%" }}>
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">
                      {session?.professional?.user?.firstName}{" "}
                      {session?.professional?.user?.lastName}
                    </h5>
                    <p> {session?.professional?.user?.email}</p>
                    <p class="card-text">{session?.professional?.summary}</p>
                    <Link
                      to={`/session/${session.messageId}`}
                      class="btn btn-primary"
                    >
                      Start Session
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Appointment;
