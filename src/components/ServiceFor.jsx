import { ServiceForData } from "./../data/ServiceForData";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
const ServiceFor = () => {
  return (
    <section className="service_for py-5">
      <div className="container">
        <h5 className="mb-2 sub_heading fw-bold text-center">Our Services</h5>
        <h2 className="mb-2 main_heading fw-bold text-center mb-5">
          We Offer Ear Piercings For
        </h2>
        <div className="row">
          {Array.isArray(ServiceForData) &&
            ServiceForData.map((service) => {
              return (
                <div className="col-sm-6 col-lg-3" key={service.id}>
                  <Link to="#." className="text-decoration-none">
                    <div className="serviceFor_card">
                      <div className="card_img">
                        <img src={service.image} alt="" />
                      </div>
                      <div className="serviceFor_content">
                        <h4 className="fw-bold text-center">
                          {service.h1Text}
                        </h4>
                        <p className="text-center">{service.paraText}</p>
                      </div>
                      {/* book button */}
                      <div className="serviceFor_btn pb-4 position-relative d-flex justify-content-center">
                        <MainButton customClass="banner-btn">
                          Book Now
                        </MainButton>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFor;
