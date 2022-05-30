import React from "react";
import Available from "../Available/Available";
import Banner from "../Banner/Banner";
import BusinessStats from "../BusinessStats/BusinessStats";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import AdFormat from "../AdFormat/AdFormat";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Available></Available>
      <AdFormat></AdFormat>
      <BusinessStats></BusinessStats>
      <CarouselSlide></CarouselSlide>
      <Footer></Footer>
    </div>
  );
};

export default Home;
