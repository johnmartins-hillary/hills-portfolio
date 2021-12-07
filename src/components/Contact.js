import React from "react";
import "./Home.css";
import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <section class="contact_section sec_padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section_title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact_form">
            <form>
              <div className="row">
                <div className="input_group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input_control"
                    required
                  />
                </div>
                <div className="input_group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input_control"
                    required
                  />
                </div>
                <div className="input_group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input_control"
                    required
                  />
                </div>
                <div className="input_group">
                  <textArea
                    placeholder="Message"
                    className="input_control"
                    required
                  ></textArea>
                </div>
                <div className="submit_btn">
                  <button type="submit" class="btn">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact_info">
            <div className="contact_info_item">
              <h3>Email</h3>
              <p>ekwealorhillary@gmail.com</p>
            </div>
            <div className="contact_info_item">
              <h3>Phone</h3>
              <p>+234 7044377963</p>
            </div>
            <div className="contact_info_item">
              <h3>follow me</h3>
              <div className="social_links">
                <a
                  href="https://www.facebook.com/hillary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/hillary-chukwuebuka-a163a41b6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/hillaryekwealor?r=nametag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
