const AppointmentFormModal = ({ id }) => {
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
              </div>
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="Date"
                    placeholder="Appointment Date"
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="String"
                    placeholder="Additional Notes"
                  />
                </div>

                <div className="form-group mb-0">
                  <button
                    className="btn btn-theme"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Book an Appointment
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
