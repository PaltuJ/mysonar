import { reviewData } from "../data/UspData";
import MultiSlider from "./MultiSlider";
import { FaStar } from "react-icons/fa6";
import googleIcon from "./../assets/images/review/google-logo.png";
import bgMultiSlide from "./../assets/images/review/bg.jpg";
const ReviewSlide = () => {
  return (
    <section
      className="reviewSlide py-5 my-5"
      style={{
        background: `rgba(0, 0, 0, 0.6) url(${bgMultiSlide})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="review_content mb-5 position-relative">
              <div className="googleIcon_wrap position-absolute d-flex gap-2 align-items-center">
                <div className="google_icon">
                  <img src={googleIcon} alt="" />
                </div>
                <div className="googleTopStar_wrap">
                  <p className="text-white m-0">
                    <span>2010+ Reviews</span>
                  </p>
                  <div className="googleTopStar_icon">
                    <FaStar fill="#FFD700" />
                    <FaStar fill="#FFD700" />
                    <FaStar fill="#FFD700" />
                    <FaStar fill="#FFD700" />
                    <FaStar fill="#FFD700" />
                  </div>
                </div>
              </div>
              <h5 className="mb-2 sub_heading fw-bold text-white">
                Testimonials
              </h5>
              <h2 className="mb-2 main_heading fw-bold text-white">
                Customer Love
              </h2>
              <p className="w-75 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repellendus eum quod quia. Quos, veritatis.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quam repellendus eum quod
                quia. Quos, veritatis.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam repellendus eum quod quia. Quos,
                veritatis.
              </p>
            </div>
          </div>
          <div className="col-12 px-4">
            <MultiSlider
              sliderData={reviewData}
              renderItem={(item) => (
                <div className="reviewSlide_card d-flex flex-column gap-3">
                  <div className="cardImg_wrap d-flex gap-3">
                    <div className="card_img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="star_wrap">
                      <h5 className="fw-bold text-center">{item.name}</h5>
                      {/* react icon star */}
                      <div className="star_icon">
                        <FaStar fill="#FFD700" />
                        <FaStar fill="#FFD700" />
                        <FaStar fill="#FFD700" />
                        <FaStar fill="#FFD700" />
                        <FaStar fill="#FFD700" />
                      </div>
                    </div>
                  </div>
                  <div className="card_content">
                    <p className="review_text">{item.reviewText}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlide;
