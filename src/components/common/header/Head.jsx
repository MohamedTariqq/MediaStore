import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Media Store</h1>
            <span>Welcome To Our Store!</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-tiktok icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
