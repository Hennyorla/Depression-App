const HomeStartFeature = () => {
  return (
    <>
      <section className="feature-section" data-bg-color="#fff">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <p>Why Choose Mood-Lift</p>
                <h2 className="title">
                  <span>The Best</span> For Your Mental Health
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xl-8">
              <div
                className="row icon-box-style"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">Mental Health Counseling</h5>
                      <p>
                        Helping individuals manage and alleviate symptoms of
                        mental health disorders. Addressing issues early to
                        prevent them from becoming more severe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-doctor-alt"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">Top Level Professionals</h5>
                      <p>
                        Our team of mental health professionals are highly
                        trained and experienced in providing mental health
                        services. They are dedicated to helping individuals
                        achieve their mental health goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-microscope"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">Mental Health Facilites</h5>
                      <p>
                        Our mental health facilities are equipped with the
                        latest technology and resources to provide the best
                        possible care for our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-ambulance-cross"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">24 Hours Services</h5>
                      <p>
                        We offer 24-hour mental health services to ensure that
                        our clients have access to the care they need when they
                        need it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-blood"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">Personal Services</h5>
                      <p>
                        We provide personalized mental health services to meet
                        the unique needs of each individual. Our team of mental
                        health professionals are dedicated to helping
                        individuals achieve their mental health goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box-item">
                    <div className="icon">
                      <i className="icofont-paralysis-disability"></i>
                    </div>
                    <div className="content">
                      <h5 className="title">Dedicated Mental Health Care</h5>
                      <p>
                        We are dedicated to providing the best possible care for
                        our clients. Our team of mental health professionals are
                        committed to helping individuals achieve their mental
                        health goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="thumb">
          <img
            src={require("../../Assets/photos/doctor-01.png")}
            alt="hope-Image"
          />
        </div>
      </section>
    </>
  );
};

export default HomeStartFeature;
