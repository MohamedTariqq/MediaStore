import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>MEDIA STORE</h1>
            <span>Print Cool Things & Design Some of Them</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <a
              href="https://www.google.com.eg/webhp?source=search_app&gws_rd=cr"
              target="__blank"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-tiktok icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>

              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                City Center, Shh Rashid Bin Saeed Street (Airport Street - near
                Centro Hotel - Abu Dhabi)
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +97126350660
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@mediastore.ae
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright © 2024 Media Store | Powered by Media Store | Made with{" "}
          <i className="fa fa-heart"></i> by Mohamed Tarek
        </p>
      </div>
    </>
  );
};

export default Footer;
