import Hero from "../components/homeComponent/Hero";
import HomeStaticMedia from "../components/homeComponent/HomeStaticMedia";
import HomeStartFeature from "../components/homeComponent/HomeStartFeature";
import HomeAppointmentForm from "../components/homeComponent/HomeAppointmentForm";
import HomeTestimonial from "../components/homeComponent/HomeTestimonial";
import HomeBlogs from "../components/homeComponent/HomeBlogs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeStaticMedia />
      <HomeStartFeature />
      <HomeAppointmentForm />
      <HomeTestimonial />
      <HomeBlogs />
    </>
  );
};

export default HomePage;
