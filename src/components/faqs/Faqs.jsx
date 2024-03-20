import React from "react";
import Back from "../common/back/Back";
import "./faq.css";
import Faq from "./Faq";

const faqs = () => {
  return (
    <>
      <Back title="Answers Questions" />
      {/* <section className="price padding">
        <div className="container grid"></div>
      </section> */}
      <Faq />
    </>
  );
};

export default faqs;
