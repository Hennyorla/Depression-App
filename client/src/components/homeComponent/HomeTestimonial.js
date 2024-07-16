const HomeTestimonial = () => {
  return (
    <>
      <section
        className="testimonial-area testimonial-default-area bg-img"
        data-bg-img="assets/img/photos/testimonial-bg1.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>Testimonial</p>
                <h2 className="title">
                  <span>Trusted</span> From Clients
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="swiper-container testimonial-slider-container"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="swiper-wrapper testimonial-slider">
                  <div className="swiper-slide testimonial-item">
                    <div className="thumb">
                      <img
                        src={require("../../Assets/testimonial/01.jpg")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-content">
                      <p>
                        “It’s been an absolute pleasure to work with hope,
                        <br />
                        their response to our brief exceeded expectations and
                        the execution was efficient, professional and very
                        reassuring. I’d fully recommend theme.”
                      </p>
                    </div>
                    <div className="client-info">
                      <div className="desc">
                        <h4 className="name">Steven Gerrard</h4>
                        <p className="client-location">
                          Golden Lotus Apartment, Brooklyn, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-logo-area brand-logo-default-area">
                <div className="swiper-wrapper brand-logo-slider">
                  <div className="swiper-slide brand-logo-item">
                    <a href="#/">
                      <img
                        src={require("../../Assets/brand-logo/01.png")}
                        alt="hope-Brand-Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide brand-logo-item">
                    <a href="#/">
                      <img
                        src={require("../../Assets/brand-logo/02.png")}
                        alt="hope-Brand-Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide brand-logo-item">
                    <a href="#/">
                      <img
                        src={require("../../Assets/brand-logo/03.png")}
                        alt="hope-Brand-Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide brand-logo-item">
                    <a href="#/">
                      <img
                        src={require("../../Assets/brand-logo/04.png")}
                        alt="hope-Brand-Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide brand-logo-item">
                    <a href="#/">
                      <img
                        src={require("../../Assets/brand-logo/05.png")}
                        alt="hope-Brand-Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTestimonial;
