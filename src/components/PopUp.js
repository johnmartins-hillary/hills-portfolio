import React from "react";
import "./Popup.css";
import pic1 from "../images/pic1.webp";
import CloseIcon from "@material-ui/icons/Close";

function PopUp({ showpopup, closePopup }) {
  return (
    <div className={`portfolio_popup ${showpopup ? "open" : ""}`}>
      <div className="pp_inner">
        <div className="pp_content">
          <div className="pp_header">
            <button ype="button" className="btn pp_close" onClick={closePopup}>
              <CloseIcon />
            </button>
            <div className="pp_thumbnail">
              <img src={pic1} alt="pp_thumbnail" />
            </div>
          </div>
          <div className="pp_body"></div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
