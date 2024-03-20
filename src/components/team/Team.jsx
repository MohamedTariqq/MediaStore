import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";
import Manager from "./Manger";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className=" grid manager">
          <Manager />
        </div>
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
