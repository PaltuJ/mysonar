import React from "react";
import blogsCrumbBg from "../assets/images/breadcrumb/blogscrumb.jpg";
import BreadCrumbs from "../components/BreadCrumbs";
import { ServiceInCity } from "../data/CityData";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Figure, Image, Row } from "react-bootstrap";
import MainButton from "../components/MainButton";
import CallBanner from "../components/CallBanner";

const ServiceInCityPage = () => {
  const { cityId } = useParams();
  if (!cityId || !Array.isArray(ServiceInCity)) {
    return (
      <section className="py-5 text-center">
        <h2>Loading city information...</h2>
      </section>
    );
  }
  const cityData = ServiceInCity.find(
    (ct) =>
      typeof ct.city === "string" &&
      typeof cityId === "string" &&
      ct.city.toLowerCase() === cityId.toLowerCase()
  );
  if (!cityData) {
    return (
      <section className="py-5 text-center">
        <h2>City not found or not available yet.</h2>
      </section>
    );
  }
  console.log(cityData);

  return (
    <>
      <section
        className="page_breadcrumb"
        style={{
          background: `rgba(0, 0, 0, 0.6) url(${blogsCrumbBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container">
          <h1 className="fw-bold text-center main_heading mb-4">
            {cityData.city}
          </h1>
          <BreadCrumbs crumbParentTitle={cityData.city} />
        </div>
      </section>
      <section className="py-5">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col lg={6} className="d-flex align-self-stretch">
              <Figure className="m-0 rounded-4 overflow-hidden shadow-sm w-100">
                <Image
                  src={cityData.cityAboutImg}
                  alt={`${cityData.city} piercing service`}
                  fluid
                  className="h-100 w-100 object-fit-cover"
                />
              </Figure>
            </Col>

            <Col lg={6}>
              <div className="cityAbout rounded-4 p-4 shadow-sm h-100 d-flex flex-column justify-content-center">
                <h2 className="fw-bold text-white mb-3">
                  Baby Ear Piercing Service in{" "}
                  <span className="text-warning">{cityData.city}</span>
                </h2>

                {cityData.aboutText.map((about, index) => (
                  <p key={index} className="text-white mb-2">
                    {about}
                  </p>
                ))}
                <div className="cityService_btn mt-5">
                  <Button
                    variant="dark"
                    type="submit"
                    to=""
                    className="page-btn d-block w-100 text-black fw-bold border"
                  >
                    Book a Slot Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="teamSection py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">
            Our Experienced {cityData.city} Team
          </h2>
          <Row className="justify-content-center">
            {cityData.teamMember.map((member, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="team_card shadow rounded-4 px-3 py-4">
                  <div className="team_img">
                    <img src={member.image} alt="" className="img-fluid" />
                  </div>
                  <div className="team_mem_details d-flex flex-column justify-content-center">
                    <p className="background">
                      <strong>Family Background:</strong> {member.background}
                    </p>
                    <p>
                      <strong>Community:</strong> {member.Community}
                    </p>
                    <p>
                      <strong>Experience:</strong> {member.Experience} Years
                    </p>
                    <p>
                      <strong>Language:</strong> {member.Language}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <CallBanner extraClass="customCallBanner" />
    </>
  );
};

export default ServiceInCityPage;
