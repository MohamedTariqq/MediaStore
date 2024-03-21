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
          {/* grid3 */}
          <div className="content grid3">  
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Advertising</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>

            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Events Management</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Design & Branding</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
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
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Production & Installation</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Digital Printing</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Digital Solutions</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Billboards</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Signage (indoor, outdoor)</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Formatting Printing</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Ecommerce</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
            <div onClick={() => setClick(false)}>
              <Link to="/Advertising">
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                    <img src={hoverCover} alt="" className="show" />
                  </div>
                  <h1>Media Production</h1>
                  <span>View Services</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainServices;
