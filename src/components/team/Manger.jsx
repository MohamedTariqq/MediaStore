import React from "react";
import { manager } from "../../dummydata";

const Manager = () => {
  return (
    <>
      {manager.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Manager;
