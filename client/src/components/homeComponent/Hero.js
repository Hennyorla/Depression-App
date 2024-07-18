import { Link } from "react-router-dom";
import slideImage1 from "../../Assets/slider/slide1.jpg";

import classes from "./Home.module.css";

const Hero = () => {
  return (
    <section className={classes.hero_container}>
      <swiper-container
        slides-per-view="1"
        speed="500"
        loop="true"
        css-mode="true"
        className={`${classes.container_fluid} ${classes.swiper_container}`}
        navigation="true"
        pagination="true"
        scrollbar="true"
      >
        <swiper-slide>
          <div className={classes.overlay}>
            <div className={classes.desc}>
              <div class="slider-content">
                <p class="text animated delay1">feel the difference with us</p>
                <h2 class="title animated delay2">
                  Your Mental Health <span>Is</span>
                  <span class="d-block">Our Priority</span>
                </h2>
                <Link
                  to="/get-started/signin"
                  class="btn btn-danger me-3 animated delay1"
                >
                  Book An Appointment
                </Link>
                <Link
                  to="/services"
                  class="btn btn-outline-secondary animated delay2"
                >
                  our services
                </Link>
              </div>
            </div>
          </div>
          <img src={slideImage1} className={classes.slider_img} />
        </swiper-slide>

        <swiper-slide>
          <div className={classes.overlay}>
            <div className={classes.desc}>
              <div class="slider-content">
                <p class="text animated delay1">feel the difference with us</p>
                <h2 class="title animated delay2">
                  Your Mental Health <span>Is</span>
                  <span class="d-block">Our Priority</span>
                </h2>
                <Link
                  to="/get-started/signin"
                  class="btn btn-danger me-3 animated delay1"
                >
                  Book An Appointment
                </Link>
                <Link
                  to="/about"
                  class="btn btn-outline-secondary animated delay2"
                >
                  Read About Us
                </Link>
              </div>
            </div>
          </div>
          <img src={slideImage1} className={classes.slider_img} />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default Hero;
