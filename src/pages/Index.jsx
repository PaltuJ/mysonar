import About from "../components/About";
import BlogsHome from "../components/BlogsHome";
import CallBanner from "../components/CallBanner";
import Cirtificate from "../components/Cirtificate";
import Cityslide from "../components/Cityslide";
import HealthBenifits from "../components/HealthBenifits";
import HeroBanner from "../components/HeroBanner";
import ImageGallery from "../components/ImageGallery";
import ReviewSlide from "../components/ReviewSlide";
import SafeExperiece from "../components/SafeExperiece";
import ServiceFor from "../components/serviceFor";
import Usp from "../components/Usp";
import ServiceInCityPage from "./ServiceInCityPage";
// import CheckOutPolicy from "./CheckOutPolicy";
// import PaymentPage from "./PaymentPage";
// import CheckOutDetailsPage from "./CheckOutDetailsPage";
// import ProductsCatPage from "./ProductsCatPage";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <Usp />
      <About />
      <ServiceFor />
      <Cityslide />
      <ImageGallery />
      <ReviewSlide />
      <SafeExperiece />
      <HealthBenifits />
      <BlogsHome />
      {/* <ProductsCatPage /> */}
      {/* <CheckOutDetailsPage /> */}
      {/* <CheckOutPolicy /> */}
      {/* <PaymentPage /> */}
      <ServiceInCityPage />
      <Cirtificate />

      <CallBanner extraClass="callCustomClass" />
    </>
  );
};

export default Index;
