import React from "react";
// import './Info.css'  //instead we're using single App.css style sheet
import VijayPhoto from "../assets/VijayPhoto.gif";

const Info = () => (
  <div className="info">
    <img className="info--img" src={VijayPhoto} alt="" />
    <div>
      <h1 className="info--name">Er Vijay Raghuwanshi</h1>
      <h3 className="info--text">Web Developer | IT Professional</h3>
      <a className="info--link" href="https://ervijayraghuwanshi.github.io/Portfolio/" target={"_blank"}>
        Vijay's Website
      </a>
      <div className="info--btn">
          <button className="email">Email</button>
          <button className="linkedin">Linkedin</button>
      </div>
    </div>
  </div>
);

export default Info;
