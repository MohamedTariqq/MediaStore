import React from "react";
import Back from "../common/back/Back";
import Services from "./Services";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Our Services" />
      <Services />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
