import { useEffect } from "react";
import {
  useGetApplicationsMutation,
  useCreateProfessionalMutation,
} from "../../lib/APIS/professionalApis/professionalApis";

const Applications = () => {
  const [getApplications, { data, error }] = useGetApplicationsMutation();
  const [createProfessional, { isSuccess, isError }] =
    useCreateProfessionalMutation();

  const onCreateProfessional = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("value");

    if (id) {
      await createProfessional(id);
    }
  };

  useEffect(() => {
    getApplications();
  }, [isSuccess]);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        {data?.length > 0 &&
          data?.map((application) => {
            return (
              <div className="col-lg-4" key={application._id}>
                <div class="card" style={{ width: "100%" }}>
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">
                      {application?.user?.firstName}{" "}
                      {application?.user?.lastName}
                    </h5>
                    <p class="card-text">
                      {application?.summary?.slice(0, 50)}
                    </p>
                    <a
                      href="#"
                      class="btn btn-secondary"
                      onClick={onCreateProfessional}
                      value={application.user._id}
                    >
                      Approve
                    </a>{" "}
                    <a href="#" class="btn btn-danger">
                      Decline
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Applications;
