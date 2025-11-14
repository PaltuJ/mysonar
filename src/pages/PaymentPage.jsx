import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import netBankingImg from "./../assets/images/logo&icons/internet-banking-logo.png";
import upiImg from "./../assets/images/logo&icons/upi-logo.png";
import cardImg from "./../assets/images/logo&icons/card-logo.jpg";
import OrderSummery from "../components/OrderSummery";

const PaymentPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const formData = location.state?.formData;

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="payment_page pb-5">
      <Container>
        <h2 className="pb-3 text-center fw-bold heading-clr">Payment Page</h2>
        <p className="mb-5 text-center">
          Please review your details and select a payment method to complete
          your booking for{" "}
          <span className="fw-semibold">
            {product?.title || "Unknown Product"}
          </span>
        </p>
        <Row>
          <Col lg={8}>
            <div className="Custumer_details mb-5 bg-light p-4 rounded-4">
              <h3 className="fw-bold mb-4 heading-clr">Customer Details</h3>
              <p className="d-flex justify-content-between w-75">
                <strong>Name:</strong> {formData?.firstName}{" "}
                {formData?.lastName}
              </p>
              <p className="d-flex justify-content-between w-75">
                <strong>Address:</strong> {formData?.address1}
              </p>
              <p className="d-flex justify-content-between w-75">
                <strong>PBilling Address:</strong> {formData?.address2}
              </p>
              <p className="d-flex justify-content-between w-75">
                <strong>PinCode:</strong> {formData?.pinCode}
              </p>
            </div>
            <div className="payment_wrap mt-4">
              <Form onSubmit={handleSubmit}>
                <h3 className="mb-5 fw-bold heading-clr">
                  Select a payment method
                </h3>
                <Form.Check
                  type="radio"
                  label={
                    <div className="upi_wrap d-flex justify-content-center gap-3 align-items-center">
                      <span>
                        UPI <br /> (Google Pay, PhonePe, Paytm, etc.)
                      </span>
                      <Image src={upiImg} alt="" />
                    </div>
                  }
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-3 d-flex gap-3 align-items-center border rounded-3 px-4"
                />
                <Form.Check
                  type="radio"
                  label={
                    <div className="upi_wrap d-flex justify-content-center gap-3 align-items-center">
                      <span>Debit/Credit Card</span>
                      <Image src={cardImg} alt="" />
                    </div>
                  }
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-3 d-flex gap-3 align-items-center border rounded-3 px-4"
                />

                <Form.Check
                  type="radio"
                  label={
                    <div className="upi_wrap d-flex justify-content-center gap-3 align-items-center">
                      <span>Net Banking</span>
                      <Image src={netBankingImg} alt="" />
                    </div>
                  }
                  name="payment"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-3 d-flex gap-3 align-items-center border rounded-3 px-4"
                />
                <div className="payment_areea p-4 shadow rounded-4">
                  <h4 className="fw-bold mb-4 heading-clr">
                    Enter your payment details
                  </h4>
                  {paymentMethod === "upi" && (
                    <div className="mt-3">
                      <Form.Group className="mb-3" controlId="upiId">
                        <Form.Label>UPI ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter UPI ID" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="upiPassword">
                        <Form.Label>UPI Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="mt-3">
                      <Form.Group className="mb-3" controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="XXX" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                      </Form.Group>
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="mt-3">
                      <Form.Group className="mb-3" controlId="bankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="accountNumber">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Number"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="ifscCode">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter IFSC Code"
                        />
                      </Form.Group>
                    </div>
                  )}
                </div>
              </Form>
            </div>
          </Col>
          <Col lg={4}>
            <div className="sidebar_wrap shadow p-4 rounded-4 border">
              <OrderSummery productsData={product} />
              <div className="d-flex justify-content-center mt-4">
                <Button type="submit" className="page-btn mx-auto w-100">
                  Pay Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentPage;
