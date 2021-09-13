import React from "react";
import "./Home.css";
import "./Header.css";

function Header({ hidesection , toggleNav}) {
  return (
    <header className={`header ${hidesection ? "active" : ""}`}>
      <div className="container">
        <div className="row flex_end">
          <buton type="button" className="nav_toggler" onClick={toggleNav}>
            <span></span>
          </buton>
          <nav className="nav">
            <div className="nav_inner">
              <ul>
                <li>
                  <a href="#home" className="nav_item link_item">
                    home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav_item link_item">
                    about
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav_item link_item">
                    portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav_item link_item">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
