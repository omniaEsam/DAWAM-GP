import {
  faDiscord,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import links from "../Navbar/Links";
import "./Footer.css";

export default function Footer() {
  const items = links();
  return (
    <div className="footer-section pt-5 pb-1" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="footer-contant mb-5  h-100">
              <h2>منصة دوام</h2>
              <div className="text-white fs-1 ">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faDiscord} />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="footer-contant   ">
              <h2 className="me-4"> تصفح</h2>
              <ul className="navbar-nav   mb-lg-0">
                {items.map((item, index) => {
                  return (
                    <li className="nav-item text-white" key={index}>
                      <Link
                        className="nav-link "
                        aria-current="page"
                        to={item.navLink}
                      >
                        {item.navText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className=" text-center"    dir="ltr" >
              <h2>تواصل معنا</h2>
              <div className="text-white ">
                <div className="footer-contact d-flex align-items-center ">
                 <div className="me-3"> <FontAwesomeIcon icon={faPhone} /></div>
                  <span>+20 100 007 7777</span>
                </div>
                <div className="mt-3 footer-contact d-flex align-items-center">
                   <div className="me-3"> <FontAwesomeIcon icon={faEnvelope} /></div>
                  <span >DawamBc@Dawam.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line "></div>
      <div className="container">
          <div className="row">
          <p className="text-white text-center footer-p " dir="ltr">
              &copy; 2023,All Right Reserved By DawamBC | info@DawamBC.org
            </p>
          </div>
      </div>
    </div>
  );
}
