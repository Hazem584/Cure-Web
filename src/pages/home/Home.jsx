import React from "react";
import HeroSection from "./sections/HeroSection";
import Howitwork from "./sections/Howitwork";
import MapSection from "./sections/MapSection";
import TopRated from "./sections/TopRated";
import Reviews from "./sections/Reviews";
import FAQs from "./sections/FAQs";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/header/NavBar";
import Mobilapplinks from "./sections/Mobilapplinks";
const Home = () => {
     return (
          <>
               <NavBar />
               <HeroSection />
               <Howitwork />
               <MapSection />
               <TopRated />
               <Reviews />
               <FAQs />
               <Mobilapplinks />
               <Footer />
          </>
     );
};

export default Home;
