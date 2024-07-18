import { useState, useEffect } from "react";
import { useCreateSessionMutation } from "../../lib/APIS/sessionApi/sessionApis";
import ErrorMessage from "../UI/ErrorMessage";

const AppointmentFormModal = ({ id }) => {
  const [sessionDate, setSessionDate] = useState("");
  const [note, setNote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createSession, { isSuccess, isError, error, isLoading }] =
    useCreateSessionMutation();

  const createSessionHandler = async (event) => {
    event.preventDefault();

    if (!note || !sessionDate) {
      return setErrorMessage("All fields are required");
    }

    await createSession({ note, sessionDate, professionalId: id });
  };

  useEffect(() => {
    if (isSuccess) {
      setNote("");
      setSessionDate("");
    }
  }, [isSuccess]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Book An Appointment
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="appointment-form">
              <div className="section-title">
                <h2 className="title">
                  <span> Do you want </span> to book an Appointment?
                </h2>
                <p> Fill the form to book an Appointment</p>

                {isError && (
                  <ErrorMessage
                    message={
                      error?.data?.error ||
                      error?.error ||
                      "something went wrong"
                    }
                  />
                )}

                {errorMessage && <ErrorMessage message={errorMessage} />}
              </div>
              <form onSubmit={createSessionHandler}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="Date"
                    placeholder="Appointment Date"
                    onChange={(event) => setSessionDate(event.target.value)}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    onChange={(event) => setNote(event.target.value)}
                    className="form-control"
                    placeholder="Additional Note"
                  ></textarea>
                </div>

                <div className="form-group mb-0">
                  <button
                    className="btn btn-theme"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    {isLoading ? "Please wait..." : " Book an Appointment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFormModal;
