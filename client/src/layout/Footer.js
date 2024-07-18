import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <>
      <footer class="footer-area">
        {pathname === "/home" && (
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="widget-item">
                  <div class="about-widget">
                    <a class="footer-logo" href="index.html">
                      <img
                        src={require("../Assets/logo.png")}
                        alt="Logo"
                        style={{ height: "50px" }}
                      />
                    </a>
                    <p class="mb-0">
                      We are committed to delivering personalized treatment
                      plans that address the unique needs of each client,
                      fostering resilience, healing, and personal growth
                    </p>
                    <ul class="widget-contact-info">
                      <li class="info-address">
                        <i class="icofont-location-pin"></i>69 Halsey St, New
                        York, Ny 10002, United States.
                      </li>
                      <li class="info-mail">
                        <i class="icofont-email"></i>
                        <a href="mailto://hello@yourdomain.com">
                          hello@yourdomain.com
                        </a>
                      </li>
                      <li class="info-phone">
                        <i class="icofont-ui-call"></i>
                        <a href="tel://(0091)8547632521">(0091) 8547 632521</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                <div class="widget-item d-inline-block">
                  <h4 class="widget-title line-bottom">Popular Tags</h4>
                  <div class="widget-tags">
                    <ul>
                      <li>
                        <a href="#/">Amazing</a>
                      </li>
                      <li>
                        <a href="#/">Envato</a>
                      </li>
                      <li>
                        <a href="#/">Themes</a>
                      </li>
                      <li>
                        <a href="#/">Clean</a>
                      </li>
                      <li>
                        <a href="#/">Wordpress</a>
                      </li>
                      <li>
                        <a href="#/">Creative</a>
                      </li>
                      <li>
                        <a href="#/">Mutilpurpose</a>
                      </li>
                      <li>
                        <a href="#/">Retina Ready</a>
                      </li>
                      <li>
                        <a href="#/">Twitter</a>
                      </li>
                      <li>
                        <a href="#/">Responsive</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="widget-item">
                  <h4 class="widget-title line-bottom">Recent Posts</h4>
                  <nav class="widget-posts">
                    <ul class="posts-item">
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>Tips
                          for Managing Stress in Daily Life
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>
                          Mental Health is all about quality.
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>Is
                          your website user friendly ?
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>Ai
                          offer weekly updates & more.
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>
                          Customer should love your web.
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i class="icon icofont-rounded-double-right"></i>Your
                          site smooth and stunning.
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                <div class="widget-item">
                  <h4 class="widget-title line-bottom">Newsletter</h4>
                  <div class="widget-newsletter">
                    <p>
                      Sign up for our mailing list to get latest updates and
                      offers.
                    </p>
                    <form class="newsletter-form input-btn-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <button class="btn btn-theme" type="button">
                        <i class="icofont-long-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                  <div class="widget-social-icons">
                    <a href="#">
                      <i class="icofont-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="icofont-google-plus"></i>
                    </a>
                    <a href="#">
                      <i class="icofont-pinterest"></i>
                    </a>
                    <a href="#">
                      <i class="icofont-rss"></i>
                    </a>
                    <a href="#">
                      <i class="icofont-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="icofont-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div class="footer-bottom">
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-12">
                <div class="widget-copyright">
                  <p>
                    &copy; 2024 <span class="text-uppercase">hope</span>. Made
                    with <i class="icofont-heart-alt"></i> by
                    <a target="_blank" href="https://www.hasthemes.com">
                      HasThemes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
