import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import img0 from "../../images/aboutimg.jpeg";
import img1 from "../images/img3.jpeg";
import img2 from "../images/anime.jpeg";
import img3 from "../images/board.jpeg";
import img4 from "../images/book.jpeg";
import img5 from "../images/carts.jpg";
import img6 from "../images/shirts.jpeg";
import img7 from "../images/moll.jpeg";
import img8 from "../images/mug.jpeg";
import img9 from "../images/sticker.jpeg";
import img10 from "../images/specialpen.jpeg";
import img11 from "../images/specialbox.jpeg";
import img12 from "../images/shuffle-04.jpg";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "../../utils/animation";
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
const About = () => {
  return (
    <>
      <Back title="About Us" />
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
    </>
  );
};

export default About;
