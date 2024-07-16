const HomeBlogs = () => {
  return (
    <>
      <section class="blog-area blog-default-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 class="title">
                  <span>Tips &</span> Tricks
                </h2>
              </div>
              <div
                class="post-items-style1"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={require("../../Assets/blog/01.jpg")}
                        alt="hope-Blog"
                      />
                    </a>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="blog-details.html">
                        How to cleaning exterior glasses secure & bright?
                      </a>
                    </h4>
                    <div class="meta">
                      Sep 17th, 2020 by
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={require("../../Assets/blog/02.jpg")}
                        alt="hope-Blog"
                      />
                    </a>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="blog-details.html">
                        Your building look alway modern and shiny more with
                        Clenora
                      </a>
                    </h4>
                    <div class="meta">
                      Sep 17th, 2020 by
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={require("../../Assets/blog/03.jpg")}
                        alt="hope-Blog"
                      />
                    </a>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="blog-details.html">
                        Notes when vacuuming in <br />
                        the house
                      </a>
                    </h4>
                    <div class="meta">
                      Sep 17th, 2020 by
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="section-title mt-md-70"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 class="title">
                  <span>FAQs</span>
                </h2>
              </div>
              <div
                class="accordian-content"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div
                  class="accordion accordion-style2 no-bg"
                  id="accordionStyle"
                >
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Can I Get A Divorce Without A Consultant?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionStyle"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur consectetur elit lacinia ornare. In volutpat
                        rutrum molestie. Vivamus efficitur orci, ac gravida eros
                        bibendum non. Nullam auctor varius fer vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        I Have A Technical Problem Or Support Issue I Need
                        Resolved, Who Do I Email?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionStyle"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur consectetur elit lacinia ornare. In volutpat
                        rutrum molestie. Vivamus efficitur orci, ac gravida eros
                        bibendum non. Nullam auctor varius fer vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What Other Services Are You Compatible With?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionStyle"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur consectetur elit lacinia ornare. In volutpat
                        rutrum molestie. Vivamus efficitur orci, ac gravida eros
                        bibendum non. Nullam auctor varius fer vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Are You Hiring?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionStyle"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur consectetur elit lacinia ornare. In volutpat
                        rutrum molestie. Vivamus efficitur orci, ac gravida eros
                        bibendum non. Nullam auctor varius fer vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices.
                      </div>
                    </div>
                  </div>
                </div>
                <a class="btn-line" href="#/">
                  View All Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlogs;
