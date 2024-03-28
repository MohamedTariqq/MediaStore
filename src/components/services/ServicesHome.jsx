import React from "react";
import Back from "../common/back/Back";
import MainServices from "./ServicesTwo";
import "./Services.css";
const ServicesHome = () => {
  return (
    <>
      <div>
        <Back title="Explore Our Services" />
        <MainServices />
      </div>
    </>
  );
};

export default ServicesHome;
