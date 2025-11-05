// import React from "react";
import FinalCTABanner from "./Components/Cta";
import Footer from "./Components/Footer";
import AlNoorHero from "./Components/Hero";
import OurAchievements from "./Components/OurAcheivements";
import OurCourses from "./Components/OurCourses";
import MeetOurTeachers from "./Components/OurTeachers";
import StudentTestimonials from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";

function HomePage() {
  return (
    <>
      <AlNoorHero />
      <WhyChooseUs />
      <OurCourses />
      <OurAchievements />
      <MeetOurTeachers />
      <StudentTestimonials />
      <FinalCTABanner />
      <Footer />
    </>
  );
}

export default HomePage;
