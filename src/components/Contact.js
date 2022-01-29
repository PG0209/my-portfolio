import React from "react";
import "./componentsCSS/contactStyles.css";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h3 className="contact-me">Contact me.</h3>
        <div className="contact-info">
          <a
            className="info"
            href="https://www.linkedin.com/in/pradeep-ym-317053190/"
          >
            <AiOutlineMail size={50} color="#ff2424" /> Pradeep YM
          </a>
          <a className="info" href="https://mail.google.com/mail">
            <AiFillLinkedin size={50} color="#0077B5" /> gowda29p@gmail.com
          </a>
          <a className="info" href="https://web.whatsapp.com">
            <AiOutlineWhatsApp color="green" size={50} /> +91 9535955235
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
