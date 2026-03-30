import arrowTwo from '../../image/arrowtwo.png';
import arrow from '../../image/Arrow.png';
import arrowblack from '../../image/arrowblack.png';
import logoo from '../../image/logo.png';
import close from '../../image/x.png';
import arrowGrey from '../../image/arrowGrey.png';
import React, { useState } from "react";
import { DownloadIcon } from 'lucide-react';
import { createIcons } from 'lucide-react';
import './navigation.css'
export default function Nav(){
  function Profils({ content, link }) {
    const handleClick = () => {
      window.location.href = link;
    };
  
    return (
      <button className='links' onClick={handleClick}>
        {content} 
        <img className='arrowblack' src={arrowblack} alt={arrowblack}/>
        <img className='arrowlink' src={arrowGrey} alt={arrow}/>
      </button>
    );
  }
    function Navigation(){
      const [isElementVisible, setIsElementVisible] = useState(false);

      const handleClick = () => {
        setIsElementVisible(true);
      };

      const handleResumeClick = () => {
        window.open('CV_TOLOJANAHARY_Noeline_Natacha.pdf', '_blank'); 
      };
      
      const handleRemove = () => {
        setIsElementVisible(false);
      };
      
        return (
          <div>
            <div className="nav">
              <div className='navGauche'>
                <img className='logoo' src={logoo} alt={logoo}/>
                <div className='roundgreen'></div>
                <p className='titre'>UI / UX DESIGNER</p>
              </div>
              <div className='navLinkContent'>
                <button onClick={handleClick} className='link'>
                  LINKS
                </button>
                <p>|</p>
                <button className='resume' onClick={handleResumeClick} >
                  <DownloadIcon size={12}/>
                  RESUME
                </button>

              </div>
            </div>
            {isElementVisible && ( 
              <div className="link-content">
                <div className="link-content-down">
                  <Profils content={"Mail"} source={arrowTwo} link={"https://mail.google.com/mail/?view=cm&fs=1&to=tolojanaharynatachanoeline@gmail.com"}/>
                  <Profils content={"Github"} source={arrowTwo} link={"https://github.com/TOLOJANAHAR?tab=repositories"}/>
                  <Profils content={"WhatsApp"} source={arrowTwo} link={"https://wa.me/0387274557"}/>
                  <Profils content={"LinkedIn"} source={arrowTwo} link={"https://www.linkedin.com/in/tolojanahary-natacha-610b2a223/"}/>
                  <button className="close" onClick={handleRemove}>
                    <img className='closebutton' src={close} alt='close'/>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      }

    return(
            <div className='first'>
                <Navigation />

                <section class="hero">
                  <div className='animationContent'>
                    <p class="wave"> </p>
                    <p class="intro">Hello, I'm Natacha</p>
                  </div>

                  <h1 class="title">
                    UI / UX Designer • Currently at ALT — AI-powered fashion discovery app
                  </h1>
                </section>

                <div className='scroll'>
                    <div className='rightToLeft'>
                    <p className='name'>TOLOJANAHARY NOELINE NATACHA • TOLOJANAHARY NOELINE NATACHA</p>
                    </div>
                </div>
            </div>

    )
}