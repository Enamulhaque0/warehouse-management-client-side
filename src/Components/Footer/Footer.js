import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer row m-0">
      <div className="footer-text col-lg-4 col-12">
        <h3>Our Address</h3>
        <p>
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
          House#12, Road#19, Sector#07, Uttara, Dhaka-1230, <br /> Bangladesh
        </p>
        <p>
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
          KA-244, Kuril, Jamuna Future Park, GB-001 Southeast <br /> ground
          floor, Vatara, Dhaka-1229
        </p>
        <p>
          {" "}
          <BsFillTelephoneFill className="me-2" /> +88 019 451 613 12
        </p>
        <a
          className="icons-social"
          href="https://www.facebook.com/inamahmed0 "
        >
          <BsFacebook />
        </a>
        <a className="icons-social" href="https://www.youtube.com/">
          <BsYoutube />
        </a>
        <a
          className="icons-social"
          href="https://www.linkedin.com/in/EnamulHaque/"
        >
          <BsLinkedin />
        </a>
        <a className="icons-social" href="https://github.com/enamulhaque0">
          <BsGithub />
        </a>
        <a className="icons-social" href="https://web.whatsapp.com/">
          <BsWhatsapp />
        </a>
        <br />
        <div className="mt-4 form">
          <input type="email" name="Email" id="" placeholder="Email" />
          <input type="submit" value="Send" />
        </div>
      </div>
      <div className="col-lg-3 col-12 footer-text-2col  ">
        <h3>Quick Links</h3>
        <Link className="links" to="/products">
          {" "}
          Products
        </Link>
        <br />
        <Link className="links" to="/blogs">
          {" "}
          Blogs
        </Link>
        <br />
        <Link className="links" to="/about">
          {" "}
          About
        </Link>
        <br />
        <Link className="links" to="/signup">
          Sign Up
        </Link>
        <br />
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
      <div className="col-lg-3 col-12 footer-text-2col">
        <h3>Our Services</h3>
        <Link className="links" to="/about">
          {" "}
          Selling
        </Link>
        <br />
        <Link className="links" to="/about">
          {" "}
          About Us
        </Link>
        <br />
        <Link className="links" to="/about">
          {" "}
          Tutorial
        </Link>
      </div>
    </div>
  );
};

export default Footer;
