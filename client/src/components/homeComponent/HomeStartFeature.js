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
                <p>Why Choose hope Medical</p>
                <h2 className="title">
                  <span>The Best</span> For Your Health
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
                      <h5 className="title">Medical Counseling</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
                      <h5 className="title">Top Level Doctors</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
                      <h5 className="title">Medical Facilites</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
                      <h5 className="title">Dedicated Patient Care</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit
                        vero. Donec ultri sollicitudin lacus
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
