
import { CityData } from "../data/CityData";
import { Link } from "react-router-dom";
import bgCity from "./../assets/images/city/citybanner.jpg";

const CityArray = [...CityData, ...CityData];
const Cityslide = ({ citySlideCustom = "" }) => {
  return (
    <section
      className={`citySlide py-5 my-5 ${citySlideCustom}`}
      style={{
        background: `rgba(0, 0, 0, 0.6) url(${bgCity})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <h5 className="mb-2 sub_heading fw-bold text-center text-white">
        Cities
      </h5>
      <h2 className="mb-5 main_heading fw-bold text-center">
        We Are Available In & Growing
      </h2>
      <div className="citySlide_wrap d-flex gap-4 mb-4">
        {Array.isArray(CityArray) &&
          CityArray.map((city, ind) => {
            return (
              <Link
                to={`#.`}
                key={ind}
                className="city_link"
                data-name={city.cityName}
              >
                <figure key={ind} className="city m-0">
                  <img src={city.cityImage} alt="" />
                </figure>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Cityslide;
