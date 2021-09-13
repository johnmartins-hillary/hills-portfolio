import React from "react";
import "./Home.css";
import "./About.css";
import pic1 from "../images/pic1.webp";
import { useRef } from "react";

// const tabsContainer = document.querySelector(".about_tabs");
// const aboutSection = document.querySelector(".about_section");

//  const handle = (e) => {
//     if(e.target.classList.contains("tab_item") && !e.target.classList.contains("active")){
//         tabsContainer.querySelector("active").classList.remove("active");
//         e.target.classList.add("active");
//         const target = e.target.getAttribute("data-target");
//         aboutSection.querySelector("tab_content.active").classList.remove("active");
//         aboutSection.querySelector(target).classList.add("active")
//     }
// }

function About() {
  return (
    <section className="about_section sec_padding" id="about">
      <div className="container">
        <div className="row">
          <div className="section_title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about_img">
            <div className="img_box">
              <img src={pic1} alt="about img" />
            </div>
          </div>
          <div className="about_text">
            <p>
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb
              oiglvbug;aibigb;aig b;ryg;airgbg burg ;gbhgh b;oweygb{" "}
            </p>
            <h3>skills</h3>
            <div className="skills">
              <div className="skill_item">html</div>
              <div className="skill_item">css</div>
              <div className="skill_item">javascript</div>
              <div className="skill_item">react js</div>
              <div className="skill_item">next js</div>
              <div className="skill_item">material-UI</div>
              <div className="skill_item">java</div>
            </div>

            <div className="about_tabs">
              <button
                type="button"
                className="tab_item active"
                data-target="education"
              >
                education
              </button>
              <button
                type="button"
                className="tab_item"
                data-target="experience"
              >
                experience
              </button>
            </div>

            <div className="tab_content active" id="education">
              <div className="timeline">
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    bachelor of engineering - <span>University of Nigeria</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    bachelor of engineering - <span>University of Nigeria</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    bachelor of engineering - <span>University of Nigeria</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
              </div>
            </div>

            <div className="tab_content" id="experience">
              <div className="timeline">
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    Web developer - <span>the codeAdict</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    Web developer - <span>the codeAdict</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
                <div className="timeline_item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    Web developer - <span>the codeAdict</span>
                  </h4>
                  <p>
                    lorem ipsum dolor sit amet consecteur adispintign selit.eun
                    ratione experdituvenium dicta autoin noifhgus?
                  </p>
                </div>
              </div>
            </div>

            <a href="cv.pdf" className="btn">
              download cv
            </a>
            <a href="#contact" className="btn">
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
