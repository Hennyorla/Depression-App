import { useState, useEffect } from "react";
import Hero from "../components/homeComponent/Hero";
import HomeStaticMedia from "../components/homeComponent/HomeStaticMedia";
import HomeStartFeature from "../components/homeComponent/HomeStartFeature";
import HomeAppointmentForm from "../components/homeComponent/HomeAppointmentForm";
import HomeTestimonial from "../components/homeComponent/HomeTestimonial";
import HomeBlogs from "../components/homeComponent/HomeBlogs";
import Loader from "../components/UI/Loader";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
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
