import { Link } from "react-router-dom";
import brandImg from "./../assets/images/logo&icons/brand-logo.svg";
import MainButton from "./../components/MainButton";
import { FaMapMarkerAlt } from "react-icons/fa";

const SidebarCall = () => {
  return (
    <>
      <aside className="call_sidebar my-5 p-4">
        <figure className="call_brand_logo m-0">
          <img src={brandImg} alt="" />
        </figure>
        <Link
          to="#."
          className="call_sidebar_btn text-decoration-none fw-bold text-white text-center d-block mt-4"
        >
          <span>Call Now:</span>{" "}
          <span className="sidebar_number">+1 234 567 890</span>
        </Link>
        {/* mail */}
        <Link
          to="#."
          className="call_sidebar_btn text-decoration-none fw-bold text-white text-center d-block mt-2"
        >
          <span>Email:</span> 2e0xu@example.com
        </Link>
        {/* location */}
        <Link
          to="https://www.google.com/maps?q=123+Main+Street,City,Country"
          target="_blank"
          rel="noopener noreferrer"
          className="call_sidebar_btn text-decoration-none fw-bold text-white text-center d-block mt-2"
        >
          <FaMapMarkerAlt className="me-2 visit_icon" />
          123 Main Street, City, Country
        </Link>
        <p className="text-center mt-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="call_sidebar_btn text-center my-4">
          <MainButton to="#." customClass="page-btn">
            Book Now
          </MainButton>
        </div>
      </aside>
    </>
  );
};

export default SidebarCall;
