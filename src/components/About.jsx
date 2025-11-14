import about1Bg from "./../assets/images/about/abut1bg.jpg";
import MainButton from "./MainButton";
const About = () => {
  return (
    <section
      className="about-section py-5 my-5"
      style={{ backgroundImage: `url(${about1Bg})` }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="about_content">
              <h5 className="mb-2 sub_heading fw-bold">About My Sonar</h5>
              <h2 className="mb-2 main_heading fw-bold">
                <span>Crafting Your Look, One Piercing at a Time</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repellendus eum quod quia. Quos, veritatis.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quam repellendus eum quod
                quia. Quos, veritatis.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam repellendus eum quod quia. Quos,
                veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repellendus eum quod quia. Quos, veritatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repellendus eum quod quia. Quos, veritatis.
              </p>
              <h4>Why Choose My Sonar</h4>
              <ul className="row">
                <li className="col-md-6">
                  <h6>Quality & Comfort</h6>
                </li>
                <li className="col-md-6">
                  <h6>Personalized Service</h6>
                </li>
                <li className="col-md-6">
                  <h6>Stylish & Trendy</h6>
                </li>
                <li className="col-md-6">
                  <h6>Deliver safety</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about__btn position-relative d-flex justify-content-center align-items-end h-100">
              <MainButton to="/#shop" customClass="about-btn">
                Read More
              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
