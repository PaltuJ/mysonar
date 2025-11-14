import React, { useEffect, useRef, useState } from "react";
import MainButton from "./MainButton";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const MultiSlider = ({
  sliderData = [],
  renderItem,
  autoPlay = true,
  autoplayDelay = 5000,
}) => {
  const totalSlides = sliderData.length;

  // Start at middle clone to enable infinite loop
  const [activeIndex, setActiveIndex] = useState(totalSlides);
  const [displayCount, setDisplayCount] = useState(3);
  const [isAnimating, setIsAnimating] = useState(true);

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);

  // Clone data for infinite effect
  const clonedData = [...sliderData, ...sliderData, ...sliderData];

  // Responsive display count
  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 991) setDisplayCount(3);
      else if (window.innerWidth >= 768) setDisplayCount(2);
      else setDisplayCount(1);
    };
    updateDisplayCount();
    window.addEventListener("resize", updateDisplayCount);
    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(
      () => setActiveIndex((prev) => prev + 1),
      autoplayDelay
    );
    return () => clearInterval(intervalId);
  }, [autoPlay, autoplayDelay]);

  // Smooth infinite loop adjustment
  useEffect(() => {
    if (!sliderRef.current) return;

    const total = totalSlides;
    // Left boundary
    if (activeIndex < total) {
      setIsAnimating(false);
      setActiveIndex(total + (activeIndex % total));
    }
    // Right boundary
    else if (activeIndex >= total * 2) {
      setIsAnimating(false);
      setActiveIndex(total + (activeIndex % total));
    }
  }, [activeIndex, totalSlides]);

  // Re-enable animation immediately after reset
  useEffect(() => {
    if (!isAnimating) requestAnimationFrame(() => setIsAnimating(true));
  }, [isAnimating]);

  // Next / Prev slide functions
  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  // Drag handlers
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    dragOffset.current = 0;
    setIsAnimating(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.pageX || e.touches[0].pageX;
    dragOffset.current = currentX - startX.current;
    sliderRef.current.style.transform = `translateX(calc(-${
      (100 / displayCount) * activeIndex
    }% + ${dragOffset.current}px))`;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsAnimating(true);

    const threshold = sliderRef.current.offsetWidth / displayCount / 4;
    if (dragOffset.current > threshold) prevSlide();
    else if (dragOffset.current < -threshold) nextSlide();
    dragOffset.current = 0;
  };

  return (
    <div className="multiSliderWrap overflow-hidden position-relative">
      <div
        className={`multiSlideTrack ${isAnimating ? "animate" : ""}`}
        ref={sliderRef}
        style={{
          transform: `translateX(-${(100 / displayCount) * activeIndex}%)`,
          gridTemplateColumns: `repeat(${clonedData.length}, ${
            100 / displayCount
          }%)`,
          display: "grid",
          transition: isAnimating ? "transform 0.3s ease" : "none",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {clonedData.map((item, index) => (
          <div key={index} className="multiSlider_item">
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <MainButton onClick={prevSlide} customClass="multiSlider_prev">
        <MdNavigateBefore />
      </MainButton>

      <MainButton onClick={nextSlide} customClass="multiSlider_next">
        <MdNavigateNext />
      </MainButton>
    </div>
  );
};

export default MultiSlider;
