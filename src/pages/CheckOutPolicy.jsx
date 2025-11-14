import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummery from "../components/OrderSummery";

const CheckOutPolicy = () => {
  const location = useLocation();
  const product = location.state?.product;
  const formData = location.state?.formData;
  const navigate = useNavigate();

  const handleAccept = () => {
    // Navigate back to checkout or next step
    navigate("/payment", { state: { product, formData } });
  };

  return (
    <section className="checkoutPolicySection pb-5">
      <Container className="">
        <Row>
          <Col md={8}>
            <div className="policy_wrapper shadow p-4 rounded-4">
              <h2 className="mb-4 heading-clr fw-bold">
                Terms & Conditions / Booking Policy
              </h2>
              <p>
                Welcome to our piercing service platform. By proceeding with
                your booking or purchase, you agree to the following terms and
                conditions. Please read them carefully before confirming your
                appointment.
              </p>
              <hr />

              <div className="policy_category">
                <h5 className="mt-4 fw-bold">
                  Important Pre-Care steps to be followed before the piercing
                  process
                </h5>
                <hr />
                <ol>
                  <li className="policy_item px-4 py-3">
                    One should be in good health with no fever and no ear
                    infection before the piercing.
                  </li>
                  <li className="policy_item px-4 py-3">
                    Children should be given a bath on the day of piercing.
                  </li>
                  <li className="policy_item px-4 py-3">
                    Children should wear comfortable clothes that are easy to
                    change from the shoulder. To stricly avoid a dress that has
                    to be worn/removed over the head.
                  </li>
                </ol>
              </div>
              <div className="policy_category">
                <h5 className="mt-4 fw-bold">Cancellation Policy</h5>
                <hr />
                <ol>
                  <li className="policy_item px-4 py-3">
                    24 hours prior to the booking time - 100% refund of the
                    booking amount (INR 1180) after deducting the processing
                    charges of the gateway provider. 4% will be deducted as
                    processing charges.
                  </li>
                  <li className="policy_item px-4 py-3">
                    12 hours prior to the booking time - 50% refund of the
                    booking amount (INR 1180) minus the processing charges of
                    the gateway provider. 4% will be deducted as processing
                    charges.
                  </li>
                  <li className="policy_item px-4 py-3">
                    Less than 12 hours prior to the booking time - Zero Refund.
                  </li>
                  <li className="policy_item px-4 py-3">
                    You can reschedule your order with in a period of 1 month
                    from the booking date. Post that it will proceed to
                    cancellation with 0% refund.
                  </li>
                </ol>
              </div>
              <div className="policy_category">
                <h5 className="mt-4 fw-bold">
                  Important steps to be followed during the piercing
                </h5>
                <hr />
                <ol>
                  <li className="policy_item px-4 py-3">
                    Marking: Customer to approve the marking before the piercing
                    procedure. Sunar practitioner will start the piercing only
                    after your final decision. (Would request for a time
                    discipline for taking the decision).
                  </li>
                  <li className="policy_item px-4 py-3">
                    Locking: Locking is for safety. Our Sunar practitioners are
                    skilled in the locking process. Customer should touch and
                    see if there are any sharp edges. Sunar practitioner will
                    leave customer place only after your final decision. (Would
                    request you for a time discipline while doing so).
                  </li>
                </ol>
              </div>
              <div className="policy_category">
                <h5 className="mt-4 fw-bold">
                  Important steps to be followed Post piercing
                </h5>
                <hr />
                <ol>
                  <li className="policy_item px-4 py-3">
                    Follow the post-care that will be shared with you post
                    piercing on the registered whatsapp number. Keep us updated
                    during our follow ups for a safe recovery.
                  </li>
                </ol>
              </div>

              {/* <Form onSubmit={handleAccept} className="my-4">
                <Form.Check
                  type="checkbox"
                  className="mb-4 fw-bold"
                  id="agreeCheckbox"
                  label="I have read and agree to the Terms & Conditions"
                  required
                />
                <Button
                  type="submit"
                  className="page-btn mx-auto w-100"
                  onClick={handleAccept}
                >
                  Proceed to Checkout
                </Button>
              </Form> */}
            </div>
          </Col>

          <Col md={4} className="position-sticky">
            <div className="sidebar_wrap shadow p-4 rounded-4 border">
              <OrderSummery productsData={product} />
              <div className="d-flex justify-content-center mt-4">
                <Button
                  type="submit"
                  className="page-btn mx-auto w-100"
                  onClick={handleAccept}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckOutPolicy;
