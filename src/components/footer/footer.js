import React from "react";
import "./footer.css";
import linkedin from '../../image/linkedin.svg'
import facebook from '../../image/facebook.svg'
import whatsapp from '../../image/whatsapp.svg'
export default function ContactSection() {
  const year = new Date().getFullYear();
  const sendMessage = () => {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=tolojanaharynatachanoeline@gmail.com&su=Project"
  };
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="title">Get in touch !!</h1>

        <p className="subtitle">
          Let’s collaborate or discuss your next project.
          <br />
          I’m available to bring your ideas to life.
        </p>

        <button className="cta-btn" onClick={sendMessage} >Let's discuss more</button>
      </div>
      <footer className="footer">
        <div className="footer-top">
          <p>© Natacha {year}. All rights reserved</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/610b2a223/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="icon" />
            </a>

            <a href="https://www.facebook.com/Nata.tolojanahary" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="icon" />
            </a>

            <a href="https://wa.me/0387274557" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" className="icon" />
            </a>
          </div>
        </div>

        <p className="footer-bottom">
          All featured projects on this portfolio are presented for demonstration purposes only, showcasing real-world design work. I do not claim ownership of any third-party materials displayed. All rights belong to their respective owners. Logos, assets, and branded content remain the property of their original creators and must not be used, reproduced, or redistributed without permission.
          If you are the rightful owner of any content and would like it credited differently or removed, please feel free to contact me.       
        </p>
      </footer>
    </section>
  );
}