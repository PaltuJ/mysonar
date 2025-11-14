import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";

const OrderSummery = ({ productsData }) => {
  // If no product data, show a fallback message
  if (!productsData || Object.keys(productsData).length === 0) {
    return <p className="text-muted">No order data available.</p>;
  }

  // Destructure safely with default values
  const {
    image = "",
    title = "No title",
    description = "",
    price = 0,
    serviceCharge = 0,
  } = productsData;

  return (
    <div className="">
      <h2 className="heading mb-4 heading-clr">Order Summary</h2>
      <div className="detailsArea">
        <h5 className="tableHeader d-flex justify-content-between">
          <span>Product</span>
          <span>Price</span>
        </h5>
        <hr />
        <div className="tableData">
          <Row className="align-items-center">
            <Col xs={6}>
              <div className="order_details_wrap d-flex flex-column justify-content-center  gap-2">
                <figure>
                  <Image
                    src={image || "https://via.placeholder.com/80"}
                    width={80}
                    alt={title}
                  />
                </figure>
                <div className="order_item_details">
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            </Col>

            <Col xs={6}>
              <p className="d-flex justify-content-end">
                $
                {price.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </Col>

            <Col xs={12}>
              <div className="serviceCharge">
                <p className="d-flex justify-content-between">
                  <span>Service Charge</span>
                  <span>
                    $
                    {serviceCharge.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
                <hr />
              </div>
            </Col>

            <Col md={12}>
              <div className="total">
                <p className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>
                    $
                    {(price + serviceCharge).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
