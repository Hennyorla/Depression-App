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
              <p>Meet Our Professsionals</p>
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
                  Dr. Willmore believes in a holistic approach to mental health.
                  She combines Cognitive Behavioral Therapy (CBT) with
                  mindfulness and stress management techniques to help her
                  clients achieve their mental health goals. Her sessions are
                  client-centered, focusing on empowering individuals with the
                  skills and knowledge they need to manage their mental health
                  effectively.
                </p>
                <Link to="/professional" className="btn-link">
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
                  Dr. David believes in a holistic approach to mental health. He
                  combines Cognitive Behavioral Therapy (CBT) with mindfulness
                  and stress management techniques to help his clients achieve
                  their mental health goals. His sessions are client-centered,
                  focusing on empowering individuals with the skills and
                  knowledge they need to manage their mental health effectively.
                </p>
                <a href="/professional" className="btn-link">
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
                  Dr. Castle believes in a holistic approach to mental health.
                  She combines Cognitive Behavioral Therapy (CBT) with
                  mindfulness and stress management techniques to help her
                  clients achieve their mental health goals. Her sessions are
                  client-centered, focusing on empowering individuals with the
                  skills and knowledge they need to manage their mental health
                  effectively.
                </p>
                <a href="professional/" className="btn-link">
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
