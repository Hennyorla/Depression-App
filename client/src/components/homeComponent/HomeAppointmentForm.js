import { Link } from "react-router-dom";

const HomeAppointmentForm = () => {
  return (
    <section className="team-area team-default-area" data-bg-color="#f3f3f3">
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
                <span>Professional &</span> Enthusiastic
              </h2>
            </div>
          </div>
        </div>

        <div className="row swiper-wrapper team-slider">
          <div className="col-lg-4 swiper-slide team-member">
            <div className="thumb">
              <img
                src={require("../../Assets/team/01.jpg")}
                alt="hope-HasTech"
              />
            </div>
            <div className="content">
              <div className="member-info">
                <h4 className="name">Dr. Helen Willmore</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut sapi euismod, auctor orci ut.
                </p>
                <Link to="#/" className="btn-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 swiper-slide team-member">
            <div className="thumb">
              <img
                src={require("../../Assets/team/02.jpg")}
                alt="hope-HasTech"
              />
            </div>
            <div className="content">
              <div className="member-info">
                <h4 className="name">Dr. Robert David</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut sapi euismod, auctor orci ut.
                </p>
                <a href="#/" className="btn-link">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 swiper-slide team-member">
            <div className="thumb">
              <img
                src={require("../../Assets/team/03.jpg")}
                alt="hope-HasTech"
              />
            </div>
            <div className="content">
              <div className="member-info">
                <h4 className="name">Dr. Kristina Castle</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut sapi euismod, auctor orci ut.
                </p>
                <a href="#/" className="btn-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppointmentForm;
