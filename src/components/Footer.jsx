import { Link } from "react-router-dom";
import BrandImg from "./../assets/images/logo&icons/brand-logo.svg";
import {
  FaEnvelope,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegCopyright,
  FaReplyAll,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="siteFooter">
      <div className="row mx-0">
        <div className="col-lg-4 offset-lg-0 border_right">
          <div className="logsection py-5">
            <Link to="/" className="text-decoration-none">
              <figure className="footerLogo m-0 w-75 mx-auto">
                <img
                  src={BrandImg}
                  alt="footer logo"
                  className="w-50 d-block mx-auto"
                />
              </figure>
            </Link>
            <div className="copyright text-center mt-5 px-5">
              <p className="copy_company text-white">
                <FaRegCopyright className="me-2" />
                Copyright 2025{" "}
                <span>
                  <Link to="/">My Sonar</Link>
                </span>{" "}
                . All Rights Reserved
              </p>
              <p className="devlopedBy text-white">
                Developed & Designed by{" "}
                <span>
                  <Link to=".#">Convirzon</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="footer_pages py-5">
            <h4 className="fw-bold ms-4">Pages</h4>
            <ul className="list-unstyled d-flex flex-column">
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Services
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Blogs
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footerService py-5">
            <h4 className="fw-bold ms-4">Services</h4>
            <ul className="list-unstyled d-flex flex-column">
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Ear Piercing
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Ear Piercing
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Ear Piercing
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Ear Piercing
                </Link>
              </li>
              <li className="d-inline-flex gap-2 align-items-center">
                <FaReplyAll className="footerLink_icon" />
                <Link to="/" className="text-decoration-none text-white">
                  Ear Piercing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footerContact py-5">
            <h4 className="fw-bold">Quick Contacts</h4>
            <ul className="list-unstyled">
              <li className="d-inline-flex gap-2 align-items-center">
                <Link
                  to="tel:+1234567890"
                  className="text-white text-decoration-none"
                >
                  <FaPhone className="me-2 visit_icon" />
                  +1 234 567 890
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@mysonar.com"
                  className="text-white text-decoration-none"
                >
                  <FaEnvelope className="me-2 visit_icon" />
                  info@mysonar.com
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.google.com/maps?q=123+Main+Street,City,Country"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <FaMapMarkerAlt className="me-2 visit_icon" />
                  123 Main Street, City, Country
                </Link>
              </li>
            </ul>
            <div className="footer_socials d-flex gap-2 mt-4">
              <Link to=".#">
                <FaFacebook className="me-2 social_icon footer_fb" />
              </Link>
              <Link to=".#">
                <FaLinkedin className="me-2 social_icon footer_in" />
              </Link>
              <>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="ig-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                </svg>

                <Link to="#">
                  <FaInstagram className="me-2 social_icon footer_ig" />
                </Link>
              </>
              <Link to=".#">
                <FaYoutube className="me-2 social_icon footer_yt" />
              </Link>
              <Link to=".#">
                <FaGooglePlus className="me-2 social_icon footer_gp" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
