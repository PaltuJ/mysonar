import MainButton from "./MainButton";
import { FaArrowRight } from "react-icons/fa";

const CallBanner = ({ extraClass = "" }) => {
  return (
    <section className={`py-5 callbanner my-5 ${extraClass}`}>
      <div className="container">
        <div className="call_content">
          <h5 className="sub_heading fw-bold text-center">Book Now</h5>
          <h2 className="main_heading fw-bold text-center">
            Book your safe ear-piercing slot today.
          </h2>
          <div className="more__btn my-5 text-center position-relative">
            <MainButton to="#." customClass="page-btn">
              Book Now
              {/* add icon react */}
              <FaArrowRight className="ms-2" />
            </MainButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallBanner;
