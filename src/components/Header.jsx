import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
  Tab,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import BrandImg from "./../assets/images/logo&icons/brand-logo.svg";
import MainButton from "./MainButton";
import { FaRegUserCircle } from "react-icons/fa";
import { productsData } from "../data/UspData";
import { ServiceInCity } from "./../data/CityData";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavActive = (path) => location.pathname === path;

  const handleLogInModal = () => setShowModal(true);
  const handleLogModalClose = () => setShowModal(false);

  // ✅ Dynamic Menu Structure
  const menuStructure = productsData.reduce((menu, product) => {
    if (!menu[product.category]) {
      menu[product.category] = new Set();
    }
    menu[product.category].add(product.subCategory.toLowerCase());
    return menu;
  }, {});
  Object.keys(menuStructure).forEach(
    (key) => (menuStructure[key] = Array.from(menuStructure[key]))
  );

  const formatText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <header className={`${"mainHeader"} ${isSticky ? "sticky" : ""}`}>
      <Navbar expand="lg" className="main_nav">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="mb-2">
            <img
              src={BrandImg}
              className="img-fluid"
              width="110"
              alt="Convirzon"
            />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link
                as={Link}
                to="/"
                className={`text-nowrap ${isNavActive("/") ? "navActive" : ""}`}
              >
                Home
              </Nav.Link>

              {/* ✅ Dynamic Product Menus */}
              {Object.keys(menuStructure).map((category, index) => (
                <NavDropdown
                  key={index}
                  title={formatText(category)}
                  id={`nav-dropdown-${index}`}
                  className="megaMenu"
                >
                  {menuStructure[category].map((sub, idx) => (
                    <NavDropdown.Item
                      key={idx}
                      as={Link}
                      to={`/products/${category}/${sub}`}
                    >
                      {formatText(category)} - {formatText(sub)}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))}

              <NavDropdown title="Cities" id="nav-dropdown-2">
                {ServiceInCity?.map((item, index) => {
                  const cityName = item.city;

                  return (
                    <NavDropdown.Item
                      key={index}
                      as={Link}
                      to={`/service/${cityName
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {cityName}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              <Nav.Link as={Link} to="/faq" className="text-nowrap">
                Faq's
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-nowrap">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-nowrap">
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Right-aligned Buttons */}
            <div className="navBtn_wrap d-flex gap-3">
              <MainButton customClass="loginBtn" onClick={handleLogInModal}>
                <FaRegUserCircle className="me-2 user_icon" /> Login/SignUp
              </MainButton>
              <MainButton to="/#booknow">Book Now</MainButton>
            </div>

            {/* ✅ Login/Register Modal */}
            <Modal
              show={showModal}
              onHide={handleLogModalClose}
              centered
              className="headerLoginModal"
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
                      <Form>
                        <h4 className="text-center my-5">Login to My Sonar</h4>
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
                        <MainButton customClass="loginBtn">Login</MainButton>
                      </Form>
                    </Tab.Pane>

                    <Tab.Pane eventKey="register">
                      <Form>
                        <h4 className="text-center my-5 fw-bold">
                          Register to My Sonar
                        </h4>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter full name"
                          />
                        </Form.Group>
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
                        <MainButton customClass="registerBtn">
                          Register
                        </MainButton>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
