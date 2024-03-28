import React, { useState } from "react";
import "./Services.css";
import Heading from "../common/heading/Heading";
import { Link } from "react-router-dom";
import cover from "../images/o1.png";
import hoverCover from "../images/o1.1.png";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "../../utils/animation";
const MainServices = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <motion.section
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVaraints}
        className="online"
      >
        <div className="container">
          <motion.div className="content">
            {/* Advertising&Markteing */}
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising&Marketing">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Advertising & Marketing</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Events Management */}
            <div onClick={() => setClick(false)}>
              <Link to="/Organizing-Events">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Organizing Events</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Design & Production */}
            <div onClick={() => setClick(false)}>
              <Link to="/Design&Production">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Design & Production</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Promotional Gifts */}
            <div onClick={() => setClick(false)}>
              <Link to="/Promotional-Gifts">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Promotional Gifts</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Interior Design */}
            <div onClick={() => setClick(false)}>
              <Link to="/Interior-Design">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Interior Design</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Digital Solution */}
            <div onClick={() => setClick(false)}>
              <Link to="/Digital-Solution">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Digital Solution</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Digital Offset Printing */}
            <div onClick={() => setClick(false)}>
              <Link to="/Digital-Offset-Printing">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Digital Offset Printing</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            {/* Billboard Manufacturing */}
            <div onClick={() => setClick(false)}>
              <Link to="/Billboard-Manufacturing">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Billboard Manufacturing</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default MainServices;
