import arrow from '../../image/Arrow.png';
import arrowblack from '../../image/arrowblack.png';
import call from '../../image/call.png';
import './footer.css';
import React, { forwardRef } from 'react';

function Link({titre, link}){
  const handleClick = () => {
    window.location.href = link;
  };
    return(
    <button className='links' onClick={handleClick}>
      {titre} 
      <img className='arrowblack' src={arrowblack} alt={arrowblack}/>
      <img className='arrowlink' src={arrow} alt={arrow}/>
    </button>
    );
  }
const Footer = forwardRef((props, footerRef) => {
    return(
    <div ref={footerRef} className='footer'>
      <p className='nom'>TOLOJANAHARY NOELINE NATACHA</p>
      <div className='footer_down'>

        <div className='textes'>
          <p className='seeya'>
            See ya!!
            <img className='call' src={call} alt='call'/>
          </p>
          <p className='texteHope'>Hope you know me better now, feel free to contact.</p>
        </div>

        <div className='contenueLinks'>
          <div className='linkHaut'>
            <Link titre={"LinkedIn"} link={"https://www.linkedin.com/in/tolojanahary-natacha-610b2a223/"}/>
            <Link titre={"Github"} link={"https://github.com/TOLOJANAHAR?tab=repositories"}/>
          </div>
          <div className='linkBas'>
            <Link titre={"Email"} link={"https://mail.google.com/mail/?view=cm&fs=1&to=tolojanaharynatachanoeline@gmail.com"}/>
            <Link titre={"WhatsApp"} link={"https://wa.me/0343260686"}/>
          </div>
        </div>

      </div>
    </div>
    )
  });

  export default Footer;