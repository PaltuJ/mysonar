import React, { useEffect, useState } from "react";
import MainButton from "./MainButton";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const SingleSlider = ({
  slidesDta,
  autoPlay = true,
  renderSlide,
  interval = 3000,
  custumClass = "",
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev === slidesDta.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(intervalId);
  }, [slidesDta.length, autoPlay, interval]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slidesDta.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slidesDta.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  return (
    <div
      className={`single-slider ${
        custumClass.trim() ? custumClass : ""
      } position-relative`}
    >
      <div className="slideWrap h-100">
        {renderSlide(slidesDta[activeSlide], activeSlide)}
      </div>
      {/* <button className="prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="next" onClick={handleNext}>
        &gt;
      </button> */}
      <MainButton onClick={handlePrev} customClass="prev">
        <MdNavigateNext />
      </MainButton>

      <MainButton onClick={handleNext} customClass="next">
        <MdNavigateBefore />
      </MainButton>

      <div className="dots">
        {slidesDta.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SingleSlider;
