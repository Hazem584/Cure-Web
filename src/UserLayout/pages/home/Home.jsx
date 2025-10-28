import React from "react";
import NavBar from "./../../../components/header/NavBar";
import HeroSection from "./sections/HeroSection";
import Howitwork from "./sections/Howitwork";
import MapSection from "./sections/MapSection";
import TopRated from "./sections/TopRated";
import Reviews from "./sections/Reviews";
import FAQs from "./sections/FAQs";
import Mobilapplinks from "./sections/Mobilapplinks";
import Footer from "../../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home flex flex-col dark:bg-dark-darkBg">
        <NavBar />
        <HeroSection />
        <Howitwork />
        <MapSection />
        <TopRated />
        <Reviews />
        <FAQs />
        <Mobilapplinks />
        <Footer />
      </div>
    </>
  );
};

export default Home;
