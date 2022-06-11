import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks, I'll reply ASAP :)", { autoClose: 3000 });
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ind8kxd",
        "template_13effmu",
        e.target,
        "user_bUDWzR01dw0nezbzJyo5S"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="ContactMe" id="ContactMe">
      <h1>Contact Me</h1>
      <h5>Lets keep in touch</h5>
      <div className="rule"></div>
      <div className="ContactContainer">
        <div className="Heading">Get In Touch 📧</div>
        <div className="ContactWrapper">
          <div className="CLeft">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/deepika-sharma-704a07196"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/deepiiiii__/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/deepikas850"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <h4>Send Your Email Here!</h4>
            <img src={require("../../assets/Home/mailz.jpeg")} alt="" />
          </div>
          <div className="CRight">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
                sendEmail(e);
              }}
            >
              <div className="form-group">
                <label htmlFor="FormControlInput1">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="FormControlInput1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="FormControlInput2">Email</label>
                <input
                  name="user_email"
                  type="email"
                  className="form-control"
                  id="FormControlInput2"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="FormControlTextarea1">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="FormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn primary-btn">
                Send <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
