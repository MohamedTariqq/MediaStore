import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import MainServices from "../../services/ServicesTwo";
import Contact from "../../contact/Contact";

import img0 from "../../images/aboutimg.jpeg";
import img1 from "../../images/anime.jpeg";
import img2 from "../../images/board.jpeg";
import img3 from "../../images/book.jpeg";
import img4 from "../../images/carts.jpg";
import img5 from "../../images/sticker.jpeg";
import img6 from "../../images/moll.jpeg";
import img7 from "../../images/mug.jpeg";
import img8 from "../../images/shirts.jpeg";
import img9 from "../../images/specialbox.jpeg";
import img10 from "../../images/specialpen.jpeg";
import img11 from "../../images/sticker.jpeg";
import img12 from "../../images/shuffle-04.jpg";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "../../../utils/animation";

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={img0} alt="YourImage" />
    </div>
  );
};

const TextComponent = () => {
  return (
    <div className="about-container">
      <h1>Who We Are</h1>
      <p>
        MediaStore is one of the leading business services providers in the UAE
        since "2009". We provide a wide variety of design, branding, digital
        services including web design, branding, digital marketing ,gift items
        ,media production , media cosuables,and much more.
      </p>
    </div>
  );
};
const map =
  "https://maps.google.com/maps?q=Media%20store%2C%20Abu%20Dhabi&t=m&z=18&output=embed&iwloc=near";
const Imageabout = (i) => {
  return (
    <div className="portfolio">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={containerVariants((i + 1) * 0.1)}
        key={i}
        className="imgs-container"
      >
        <div className="box">
          <img src={img1} alt="" />
          <div className="caption">
            <h4>Awesome Imagssse</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img2} alt="" />
          <div className="caption">
            <h4>Awesome Imagssse</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img3} alt="" />
          <div className="caption">
            <h4>Awesome Imagssse</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img4} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img5} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img6} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img7} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img8} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img9} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img10} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img11} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={img12} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="" title="" />
          </div>
        </div>
      </section>
      <div className="margin">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVaraints}
          className="container-about"
        >
          <ImageComponent />
          <TextComponent />
        </motion.div>
        <div className="ourservices">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
          >
            What We Do
          </motion.h1>
        </div>
        <Imageabout />
        <div className="ourservices">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
          >
            Expolre Our Services
          </motion.h1>
        </div>
        <div className="space"></div>
        <MainServices />
        <div className="ourservices">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
          >
            Contact us
          </motion.h1>
        </div>
        {/* Contact us */}
        <div className="space"></div>

        <motion.section
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVaraints}
          className="contacts "
        >
          <div className="container shadow flexSB">
            <div className="left row">
              <iframe
                src={map}
                title="Media store, Abu Dhabi"
                aria-label="Media store, Abu Dhabi"
              ></iframe>
            </div>
            <div className="right row">
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="items ">
                <div className="box-contact">
                  <h4>ADDRESS:</h4>
                  <p>
                    City Center, Shh Rashid Bin Saeed Street (Airport Street -
                    near Centro Hotel - Abu Dhabi)
                  </p>
                </div>
                <div className="box-contact">
                  <h4>EMAIL:</h4>
                  <p> info@mediastore.ae</p>
                  <div>
                    <h4>PHONE:</h4>
                    <p> +97126350660</p>
                  </div>
                </div>
              </div>

              <form action="">
                <div className="flexSB">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Create a message here..."
                ></textarea>
                <button className="primary-btn">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Hero;
