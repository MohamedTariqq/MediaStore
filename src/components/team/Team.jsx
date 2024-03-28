import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import "../about/about.css";
import Manager from "./Manger";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className=" grid4 containermanger">
          <Manager />
        </div>
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
