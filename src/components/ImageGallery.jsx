import { useState, useEffect, useCallback } from "react";
import { MdClose, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import galleryimg1 from "./../assets/images/gallery/service1.jpg";
import galleryimg2 from "./../assets/images/gallery/service2.jpg";
import galleryimg3 from "./../assets/images/gallery/service3.jpg";
import galleryimg4 from "./../assets/images/gallery/service4.jpg";
import galleryimg5 from "./../assets/images/gallery/service5.jpg";
import galleryimg6 from "./../assets/images/gallery/service6.jpg";
import MainButton from "./MainButton";

const ImageGallery = () => {
  // Your gallery image data (you can replace these paths)
  const images = [
    {
      src: galleryimg1,
      alt: "Baby Ear Piercing",
      caption: "Gentle & Safe Piercing",
    },
    {
      src: galleryimg2,
      alt: "Nose Piercing",
      caption: "Stylish Nose Piercing",
    },
    {
      src: galleryimg3,
      alt: "Gold Jewelry",
      caption: "Premium Gold Earrings",
    },
    {
      src: galleryimg4,
      alt: "Sterile Setup",
      caption: "Completely Hygienic Process",
    },
    {
      src: galleryimg5,
      alt: "Sterile Setup",
      caption: "Completely Hygienic Process",
    },
    {
      src: galleryimg6,
      alt: "Sterile Setup",
      caption: "Completely Hygienic Process",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev]);

  return (
    <section className="gallery-section py-5 text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold main_heading">Our Piercing Gallery</h2>

        {/* Gallery Grid */}
        <div className="row g-4 justify-content-center">
          {images.map((img, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="gallery-item" onClick={() => openModal(index)}>
                <img src={img.src} alt={img.alt} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {isOpen && (
          <div className="lightbox">
            <button className="close-btn" onClick={closeModal}>
              <MdClose size={28} />
            </button>

            {/* <button className="nav-btn prev" onClick={handlePrev}>
              <MdNavigateBefore size={40} />
            </button>
            <button className="nav-btn next" onClick={handleNext}>
              <MdNavigateNext size={40} />
            </button> */}
            <MainButton onClick={handlePrev} customClass="prev">
              <MdNavigateNext />
            </MainButton>

            <MainButton onClick={handleNext} customClass="next">
              <MdNavigateBefore />
            </MainButton>

            <div className="lightbox-content">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="lightbox-img"
              />
              {images[activeIndex].caption && (
                <p className="caption">{images[activeIndex].caption}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
