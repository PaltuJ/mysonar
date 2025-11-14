import SingleSlider from "./SingleSlider";
import { HeroSlideData } from "./../data/HeroSlideData";
import MainButton from "./MainButton";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <SingleSlider
        custumClass="heroSlide_custom"
        autoPlay={true}
        interval={5000}
        slidesDta={HeroSlideData}
        renderSlide={(sld, indx) => (
          <>
            <figure key={indx}>
              <img src={sld.image} alt="" />
            </figure>
            <div className="container">
              <div className="banner_content">
                <h1>
                  <span>{sld.h1Text}</span>
                </h1>
                <p>{sld.paraText}</p>
                <MainButton to="/#shop" customClass="banner-btn">
                  Book Now
                </MainButton>
              </div>
            </div>
          </>
        )}
      />
    </section>
  );
};

export default HeroBanner;
