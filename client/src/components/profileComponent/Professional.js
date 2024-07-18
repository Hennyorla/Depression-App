import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllProfessionalsMutation } from "../../lib/APIS/professionalApis/professionalApis";
import AppointmentFormModal from "./AppointmentFormModal";

const Professionals = () => {
  const [getAllProfessionals, { data }] = useGetAllProfessionalsMutation();

  useEffect(() => {
    getAllProfessionals();
  }, []);

  console.log(data);

  return (
    <>
      <section
        className="team-area team-default-area p-0"
        data-bg-color="#f3f3f3"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>Meet Our Docots</p>
                <h2 className="title">
                  <span>Available</span> Professionals
                </h2>
              </div>
            </div>
          </div>

          <div className="row swiper-wrapper team-slider">
            {data?.length > 0 &&
              data.map((professional) => {
                return (
                  <div
                    className="col-lg-4 swiper-slide team-member"
                    key={professional._id}
                  >
                    <AppointmentFormModal id={professional._id} />
                    <div className="thumb">
                      <img
                        src={require("../../Assets/team/01.jpg")}
                        alt="hope-HasTech"
                      />
                    </div>
                    <div className="content">
                      <div className="member-info">
                        <h4 className="name">
                          {professional?.user?.firstName}{" "}
                          {professional?.user?.lastName}
                        </h4>
                        <p>{professional?.summary}</p>

                        <p>{professional?.specialties}</p>
                      </div>

                      <button
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        type="button"
                        value={professional?._id}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Professionals;
