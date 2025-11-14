import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { HealthBenifitData } from "./../data/UspData";

const HealthBenifits = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleSelect = (eKey) => {
    const key = Number(eKey);
    // Reset animation
    setAnimationClass("fade-slide-enter");
    setTimeout(() => {
      setAnimationClass("fade-slide-enter-active");
    }, 50);
    setActiveTab(key);
  };

  return (
    <section className="py-5 healthBenifits">
      <div className="container">
        <h5 className="mb-2 sub_heading fw-bold text-center">
          Health Benefits
        </h5>
        <h2 className="mb-2 main_heading fw-bold text-center mb-5">
          Piercing: More Than Just Style.
        </h2>
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="imagetab">
              <figure className="m-0">
                <img
                  src={HealthBenifitData[activeTab]?.image}
                  alt=""
                  className={`healthAccordionImg ${animationClass}`}
                />
              </figure>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="col-lg-7 order-1 order-lg-2">
            <div className="healtBenifit_tab">
              <Accordion activeKey={String(activeTab)} onSelect={handleSelect}>
                {HealthBenifitData.map((healthItem, healthInd) => (
                  <Accordion.Item
                    eventKey={String(healthInd)}
                    key={healthItem.id}
                  >
                    <Accordion.Header>
                      <div className="usp_head d-flex align-items-center gap-2">
                        <span className="slNo">0{healthInd + 1}</span>
                        <h5 className="mb-0 fw-bold">{healthItem.h4Text}</h5>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{healthItem.paraText}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenifits;
