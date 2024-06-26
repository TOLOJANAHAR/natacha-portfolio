import React, { useRef, useEffect,forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";
import arrow from '../../image/Arrow.png';
import './certification.css';

function Certification({ link, tag1, tag2, titre, backgroundColor, navigation }) {
    const certificationStyle = {
      backgroundColor: backgroundColor || 'initial',
    };
    let cont = useRef(null);
    let image = useRef(null);
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    useEffect(() => {
      gsap.fromTo(cont, { width: "80%" }, { width: "100%", duration: 0.5, ease: "power2.inOut",
        scrollTrigger: {
          trigger: cont,
          start: "50% 89%",
          end: "bottom 80%",
          //markers:true,
          scrub: 2 
        }
      });
      gsap.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 0.5, width: "440px",
        scrollTrigger: {
          trigger: cont,
          start: "50% 89%",
          end: "bottom 80%",
         // markers:true,
          scrub: 2
        }
      });
    }, []);
    
    const handleClick = () => {
      window.location.href = navigation;
    };
    return (
      <section className="main">
        <div ref={el => (cont = el)} className='certificationbloc' style={certificationStyle}>
        <>
          <div ref={el => (image = el)} className="certificationbloc-container">
            <button className='cerficationLink' onClick={handleClick} >
              {link} <img className='arrowCertification' src={arrow} alt={arrow} />
            </button>
            <div className='tags'>
              <p className='tag1'>{tag1}</p>
              <p className='tag2' style={{ marginTop: '-10px' }}>{tag2}</p>
            </div>
            <p className='titrecertificat'>{titre}</p>
          </div>
        </>
        </div>
      </section>
    );
  }
  

const Ceertification = forwardRef((props, certificationRef) => {
    return(
    <div ref={certificationRef} className='certification'>
        <Certification navigation={"https://coursera.org/share/3a18e4f1bff1dc8342c329d2d4849207"} link={"LINK TO PROFILE"} tag1={"#AI"} tag2={"#CERITIFCATE"} titre={"COURSERA"} backgroundColor="#2A86FF"/>
        <Certification navigation={"https://github.com/TOLOJANAHAR/.Kopia"} link={"LINK TO GITHUB"} tag1={"#FIREBASE"} tag2={"#MOBILEAPP"} titre={"YOUTHMOBILE."} backgroundColor="#9302FF"/>
        <Certification navigation={"https://github.com/TOLOJANAHAR/Licence-Plate-Detection"} link={"LINK TO PROJECT "} tag1={"#LICENCE PLATE"} tag2={"#DETECTION"} titre={"INTERSHIP"} backgroundColor="#A5E314"/>
    </div>
    )
  });

export default Ceertification;