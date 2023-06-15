import React from "react";
import Hero from "./Hero";
import "./AboutUs.css";
import AboutImage1 from "../assets/images/about-image1.jpg"
import AboutImage2 from "../assets/images/about-image2.jpg"
import avatar from "../assets/images/avatar.jpg"
import avatar2 from "../assets/images/avatar2.jpg"
import avatar1 from "../assets/images/avatar1.jpg"
import mission from "../assets/images/missionImage.png"
import vision from "../assets/images/visionImage.png"

const AboutUs = () => {
  return(
  
  <>
    <Hero />
    {/* -----------------About Us Starts Here---------------------- */}
    <div className="aboutUs-head text-center py-3">
      <h1>About Us</h1>
      <h5>Know more about inkless reads</h5>
    </div>

    <div className="container">
      <div className="row topRow">
        <div className="col left-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus neque odio ea? Blanditiis delectus nemo quae dignissimos ratione non voluptates vero ipsum fugit dolorum nihil, porro dolore aut animi cum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio recusandae voluptate soluta sed vel debitis dolore corporis sunt magni harum. Consequatur veritatis architecto aut, voluptatem culpa incidunt omnis earum asperiores.</p>
        </div>
        <div className="col right-column">
        <img src={AboutImage1} className="aboutImage1"/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row bottomRow"> 
        <div className="col right-column">
        <img src={AboutImage2} className="aboutImage2"/>
        </div>
        <div className="col left-column">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus neque odio ea? Blanditiis delectus nemo quae dignissimos ratione non voluptates vero ipsum fugit dolorum nihil, porro dolore aut animi cum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio recusandae voluptate soluta sed vel debitis dolore corporis sunt magni harum. Consequatur veritatis architecto aut, voluptatem culpa incidunt omnis earum asperiores.</p>
        </div>
      </div>
    </div>
    

    <hr />
    {/* ---------------Meet the Team------------------------------ */}
    <div className="team m-5 text-center">
      <div className="teamHeader p-5">
          <h3>Meet the amazing team behind this Incredible project</h3>
      </div>
      <div className="row">
        <div className="col teamLeft">
        <img src={avatar} alt="Team avatar" className="avatar" />
          <h5>Dante Alcantara Jr</h5>
          <blockquote>"My software never has bugs. It just develops random features."</blockquote>
        </div>
        <div className="col teamMid">
        <img src={avatar2} alt="Team avatar" className="avatar2" />
          <h5>Joseph Moroni Azares</h5>
          <blockquote>"The only problem with troubleshooting is that sometimes trouble shoots back."</blockquote>
        </div>
        <div className="col teamRight">
        <img src={avatar1} alt="Team avatar" className="avatar1" />
          <h5>Luis Angelo Tabug</h5>
          <blockquote>"I'm not anti-social; I'm just not user friendly"</blockquote>
        </div>
      </div>
    </div>

    <hr />

    {/* -------------------Mission Vision------------------------ */}
    <div className="container missionVision py-5">
      <h1 className="missionVisionHeader mb-5">Our Company Goals</h1>
      <div className="row">
        <div className="col mission my-5">
        <img src={mission} alt="mission" className="mission" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi alias modi, nemo ipsa ad dolores cum tempore iure. Sunt odit excepturi placeat eligendi, quae adipisci eaque voluptas repudiandae. Aperiam.</p>
        </div>
        <div className="col vision my-5">
        <img src={vision} alt="vision" className="vision" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi alias modi, nemo ipsa ad dolores cum tempore iure. Sunt odit excepturi placeat eligendi, quae adipisci eaque voluptas repudiandae. Aperiam.</p>
        </div>

        </div>
      </div>
    

  </>

)
};

export default AboutUs;
