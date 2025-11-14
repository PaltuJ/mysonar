import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Accordion,
  Nav,
  Tab,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummery from "../components/OrderSummery";
import { FaWhatsapp } from "react-icons/fa";

const CheckOutDetailsPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [areaOfPiercing, setAreaOfPiercing] = useState("ear");
  const [piercingType, setPiercingType] = useState("");
  const [whatsAppUpdates, setWhatsAppUpdates] = useState(true);
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    pinCode: "",
    country: "",
    mobile: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    serviceTaker: "",
    dob: "",
    parentSpouse: "",
    serviceDate: "",
    specialRequest: "",
  });

  // --- INPUT HANDLER ---
  const handleChange = (e) => {
    const { id, value } = e.target;

    // Map form control IDs to correct state keys
    const keyMap = {
      formPinCode: "pinCode",
      formCountry: "country",
      formMobile: "mobile",
      formEmail: "email",
      formFirstName: "firstName",
      formLastName: "lastName",
      formPassword: "password",
      formConfirmPassword: "confirmPassword",
      formAddress1: "address1",
      formAddress2: "address2",
      formCity: "city",
      formState: "state",
      formServiceTaker: "serviceTaker",
      formDOB: "dob",
      formParentSpouse: "parentSpouse",
      formServiceDate: "serviceDate",
      formSpecialRequest: "specialRequest",
    };

    const field = keyMap[id];
    if (field) {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };
  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm your password";

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Mobile validation (10 digits)
    if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.pinCode.trim()) newErrors.pinCode = "Pin Code is required";
    else if (!/^[0-9]{6}$/.test(formData.pinCode))
      newErrors.pinCode = "Enter a valid 6-digit Pin Code";
    // Password strength validation
    if (
      formData.password &&
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 6 characters long, include one letter, one number, and one special character";
    }

    // Password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- SUBMIT HANDLER ---
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    const submissionData = {
      ...formData,
      areaOfPiercing,
      piercingType,
      whatsAppUpdates,
      product,
    };

    console.log("✅ Form submitted successfully:", submissionData);

    alert("Form submitted successfully!");
    const productId = product?.id || "1";
    navigate(`/checkout-policy/${productId}`, {
      state: { product, formData: submissionData },
    });
  };
  {
    /* <span class="star__rating">[uacf7_star_rating* uacf7_star_rating-790 star1:1 star2:2 star3:3 star4:4 star5:5 class:select-245 "default"]</span> */
  }
  return (
    <section className="checkoutFormSection py-5">
      <Container className="pt-5 mt-5">
        {/* --- Top Section --- */}
        <Row className="my-4">
          <Col>
            <div className="d-flex justify-content-start gap-3 user_detail_heading rounded-3">
              <span className="fw-bold text-white">Order as a New User</span>
              <span className="fw-bold text-warning">|</span>
              <span
                style={{ cursor: "pointer" }}
                className="fw-bold text_pink text-decoration-underline"
                onClick={() => setShowLoginModal(true)}
              >
                Already have an account? Login
              </span>
            </div>
          </Col>
        </Row>

        {/* --- Main Form --- */}
        <Row className="g-5">
          <Col lg={8}>
            <Form
              onSubmit={handleSubmit}
              className="checkoutDetailsForm p-4 shadow-sm rounded-4"
            >
              <h2 className="personal_info fw-bold heading-clr mb-4">
                Personal Information
              </h2>
              {/* Contact Info */}
              <Row className="mb-3 g-3">
                <Col md={6}>
                  <Form.Group controlId="formPinCode">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Pin Code"
                      value={formData.pinCode}
                      onChange={handleChange}
                      isInvalid={!!errors.pinCode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pinCode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formMobile">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                      isInvalid={!!errors.mobile}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mobile}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Email + First Name */}

                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                  </Form.Group>
                </Col>
                {/* Last Name + Password */}

                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                {/* <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                  </Form.Group>
                </Col> */}
                <Col md={6}>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create Password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Confirm Password */}

                <Col md={6}>
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Address Fields */}
              <Form.Group className="mb-3" controlId="formAddress1">
                <Form.Label>Billing Address 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address Line 1"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress2">
                <Form.Label>Billing Address 2 (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address Line 2"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter State"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Service Details */}
              <Form.Group className="mb-3" controlId="formServiceTaker">
                <Form.Label>Service Taker's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={formData.serviceTaker}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formParentSpouse">
                <Form.Label>Parent/Spouse Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={formData.parentSpouse}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formServiceDate">
                <Form.Label>Service Date</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.serviceDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="painless-note bg-info border rounded-3 p-3 mb-4">
                <p>
                  Customers booking for the same day or next day slot, can book
                  with your choice of date and time as per availability in the
                  booking portal. However, if we are facing any logistics issue
                  in honouring your ask, we will inform you well in advance. You
                  may also share your alternate date and time (if any) in the
                  remarks section.
                </p>
              </div>
              {/* Special Request */}
              <Form.Group className="mb-3" controlId="formSpecialRequest">
                <Form.Label>Special Request</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Request"
                  value={formData.specialRequest}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Area of Piercing */}
              <Form.Group className="mb-3" controlId="formAreaPiercing">
                <Form.Label>Area of Piercing</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Ear"
                    name="areaPiercing"
                    type="radio"
                    id="earRadio"
                    checked={areaOfPiercing === "ear"}
                    onChange={() => setAreaOfPiercing("ear")}
                  />
                  <Form.Check
                    inline
                    label="Nose"
                    name="areaPiercing"
                    type="radio"
                    id="noseRadio"
                    checked={areaOfPiercing === "nose"}
                    onChange={() => setAreaOfPiercing("nose")}
                  />
                </div>
              </Form.Group>

              {/* Type of Piercing */}
              <Accordion className="mb-3">
                {[
                  {
                    key: "earLobe",
                    title: "Ear Lobe",
                    desc: "Soft tissue, common for beginners",
                  },
                  {
                    key: "helix",
                    title: "Helix",
                    desc: "Upper cartilage piercing",
                  },
                  {
                    key: "noseRing",
                    title: "Nose Ring",
                    desc: "Nostril piercing",
                  },
                  { key: "septum", title: "Septum", desc: "Between cartilage" },
                ].map((item) => (
                  <Accordion.Item eventKey={item.key} key={item.key}>
                    <Accordion.Header>
                      <Form.Check
                        type="radio"
                        name="piercingType"
                        label={item.title}
                        id={item.key}
                        checked={piercingType === item.key}
                        onChange={() => setPiercingType(item.key)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </Accordion.Header>
                    <Accordion.Body>{item.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>

              {/* --- Extra Note for Painless Options --- */}
              <div className="painless-note bg-light border rounded-3 p-3 mb-4">
                <strong>NOTE:</strong>
                <ol className="mt-2 mb-0 ps-3">
                  <li>
                    Additional charge of <strong>INR 200 + GST</strong> will be
                    applicable if chosen{" "}
                    <em>
                      "Painless with numbing cream and application by mySunar"
                    </em>
                    .
                  </li>
                  <li>
                    Additional charge of <strong>INR 150 + GST</strong> will be
                    applicable if chosen{" "}
                    <em>
                      "Painless with numbing cream by customer, application by
                      mySunar"
                    </em>
                    .
                  </li>
                </ol>
              </div>

              {/* WhatsApp Updates */}
              <Form.Group
                className="mb-3 p-3 bg-info rounded-4 border shadow"
                controlId="formWhatsApp"
              >
                {/* add whatsapp icon */}
                <div className="whatsApp_wrap d-flex gap-3 align-items-center">
                  <FaWhatsapp size={28} color="green" />

                  <Form.Check
                    type="switch"
                    label="Get Updates on WhatsApp"
                    checked={whatsAppUpdates}
                    onChange={(e) => setWhatsAppUpdates(e.target.checked)}
                  />
                </div>
                <p className="whats_app_text pt-4">
                  NOTE: Our Post-care process for healing is based on WhatsApp.
                  Please keep the box ticked to receive updates from mySunar on
                  Post-care.
                </p>
              </Form.Group>

              {/* <Button type="submit" className="page-btn" onClick={handleSubmit}>
                Proceed to Checkout
              </Button> */}
            </Form>
          </Col>

          {/* Order Summary */}
          <Col lg={4}>
            <div className="order_summery p-4 shadow rounded-4">
              <OrderSummery productsData={product} />
              <div className="d-flex justify-content-center mt-4">
                <Button
                  type="submit"
                  className="page-btn mx-auto w-100"
                  onClick={handleSubmit}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Login/Register Modal */}
        <Modal
          show={showLoginModal}
          onHide={() => setShowLoginModal(false)}
          centered
        >
          <Modal.Body>
            <Tab.Container defaultActiveKey="login">
              <Nav variant="tabs" className="mb-3 d-flex flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="register">Register</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <Form className="text-center">
                    <h4 className="my-4">Login</h4>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                      />
                    </Form.Group>
                    <Button className="page-btn">Login</Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="register">
                  <Form className="text-center">
                    <h4 className="my-4">Register</h4>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Create password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                      />
                    </Form.Group>
                    <Button className="page-btn">Register</Button>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default CheckOutDetailsPage;
