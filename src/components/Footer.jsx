import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logofinal.png"; // adjust path if needed
import { FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="custom-footer text-white py-5">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Logo */}
          <div className="col-md-4 text-center text-md-start">
            <p className="mb-0 small">
              Chloe’s Venture © {new Date().getFullYear()}
            </p>
          </div>

          <div className="col-md-4 text-center">
            <ul className="footer-nav list-unstyled d-flex justify-content-center gap-4 mb-0">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="mailto:info@chloesventure.com">Email</a>
              </li>
              <li>
                <a href="tel:+911234567890">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest />
              </a>
              <a href="mailto:info@chloesventure.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
