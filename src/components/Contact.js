/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Myform from "./Form";
function Contact() {
  return (
    <div className="contact">
      <div className="form">
        <h4>
          Send me an email <span>😉</span>
        </h4>
        <Myform />
      </div>
    </div>
  );
}
export default Contact;
