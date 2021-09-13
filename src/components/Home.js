import React from "react";
import "./Home.css";
import pic1 from "../images/pic1.webp"

function Home({hidesection}) {
  return (
    <section className={`home_section align_items_center active ${hidesection ? "fade_out" : ""}`} id="home">
      <div className="container ">
        <div className="row align_items_center">
          <div className="home_text">
            <p>Hello, I'm</p>
            <h1>Ekwealor Hillary Chukwuebuka</h1>
            <h2>Frontend Web Developer</h2>
            <a href="#about" className="btn link_item">more about me</a>
            <a href="#portfolio" className="btn link_item">portfolio</a>
          </div>
          <div className="home_img">
              <div className="img_box">
                  <img src={pic1} alt="profile-image" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
