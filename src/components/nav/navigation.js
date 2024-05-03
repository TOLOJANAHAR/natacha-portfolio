import arrowTwo from '../../image/arrowtwo.png';
import profile from '../../image/profile.png';
import arrow from '../../image/Arrow.png';
import arrowblack from '../../image/arrowblack.png';
import logoo from '../../image/logo.png';
import close from '../../image/x.png';
import arrowGrey from '../../image/arrowGrey.png';
import tree from '../../image/tree.png';
// import down from '../../image/down.svg';
import React, { useState } from "react";
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
      
      const handleRemove = () => {
        setIsElementVisible(false);
      };
      
        return (
          <div>
            <div className="nav">
              <div className='navGauche'>
                <img className='logoo' src={logoo} alt={logoo}/>
                <p className='titre'>AI & FRONTEND DEVELOPPER</p>
              </div>
              <button onClick={handleClick} className='link'>
                <img  className='tree' src={tree} alt='tree'/>
                LINK</button>
            </div>
            {isElementVisible && ( 
              <div className="link-content">
                <div className="link-content-down">
                  <Profils content={"Mail"} source={arrowTwo} link={"https://mail.google.com/mail/?view=cm&fs=1&to=tolojanaharynatachanoeline@gmail.com"}/>
                  <Profils content={"Github"} source={arrowTwo} link={"https://github.com/TOLOJANAHAR?tab=repositories"}/>
                  <Profils content={"WhatsApp"} source={arrowTwo} link={"https://wa.me/0343260686"}/>
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
                <div className='scroll'>
                    <div className='rightToLeft'>
                    <p className='name'>TOLOJANAHARY TOLOJANAHARY</p>
                    </div>
                </div>
                <img src={profile} className='profile'alt={profile}/>
            </div>

    )
}