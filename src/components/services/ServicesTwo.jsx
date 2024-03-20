import React, { useState } from "react";
import "./Services.css";
import Heading from "../common/heading/Heading";
import { Link } from "react-router-dom";
import cover from "../images/o1.png";
import hoverCover from "../images/o1.1.png";
const MainServices = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="SERVICES" title="Browse Our Services" />
          <div className="content grid3">
            <ul
              className={click ? "mobile-nav" : "flexSB "}
              onClick={() => setClick(true)}
            >
              <li>
                <Link to="/ServiceOne">
                  <div className="box">
                    <div className="img">
                      <img src={cover} alt="" />
                      <img src={hoverCover} alt="" className="show" />
                    </div>
                    <h1>UI/UX Design Courses</h1>
                    <span>View Services</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
            <div className="box">
              <div className="img">
                <img src={cover} alt="" />
                <img src={hoverCover} alt="" className="show" />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>View Services</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainServices;
