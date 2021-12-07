import React from "react";
import "./Home.css";
import "./Portfolio.css";
import pic1 from "../images/pic1.webp";
import pic2 from "../images/pic2.webp";

function Portfolio({showpopup, handlePopup, closePopup}) {
 

  return (
    <div>
      <section
        className="portflio_section sec_padding"
        onClick={handlePopup}
        id="portfolio"
      >
        <div className="container">
          <div className="row">
            <div className="section_title">
              <h2>recent work</h2>
            </div>
          </div>

          <div className="row">
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic1} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">education course website</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    lorem ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkygglorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggff
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      technologies used - <span>Html, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic2} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">Fashion ecommerce</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    Fashgold is an ecommerce app hat is usdfor making the
                    national eccombihfbkb app for the nation but is created on
                    the yaer -----
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Jul 2021</span>
                    </li>
                    <li>
                      technologies used - <span>React, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online -{" "}
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic1} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">education course website</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    lorem ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkygglorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggff
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      technologies used - <span>Html, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic1} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">education course website</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    lorem ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkygglorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggff
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      technologies used - <span>Html, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic1} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">education course website</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    lorem ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkygglorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggff
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      technologies used - <span>Html, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio_item">
              <div className="portfolio_item_thumbnail">
                <img src={pic1} alt="portfolio item thumb" />
              </div>
              <h3 className="portfolio_item_title">education course website</h3>
              <button type="button" className="btn view_project_btn">
                view project
              </button>
              <div className="portfolio_item_details">
                <div className="description">
                  <p>
                    lorem ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkygglorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggflorem
                    ipsuiudhfvlcauygfvlyluyfvydlfy vkyaegfkyafvkyggff
                  </p>
                </div>
                <div className="general_info">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      technologies used - <span>Html, css</span>
                    </li>
                    <li>
                      Role - <span>Frontend</span>
                    </li>
                    <li>
                      view Online
                      <span>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          www.domain.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
