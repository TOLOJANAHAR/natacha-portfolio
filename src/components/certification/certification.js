import React, { useRef, useEffect,forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";
import arrow from '../../image/arrowblack.png';
import './certification.css';

function Certification({ link, tag1, tag2, titre, backgroundColor, navigation }) {
    const certificationStyle = {
      border: "1px solid black",
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
          scrub: 2 
        }
      });
      gsap.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out",
        scrollTrigger: {
          trigger: cont,
          start: "50% 89%",
          end: "bottom 80%",
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
    <div>
      <div ref={certificationRef} className='certification'>
          <Certification navigation={"https://www.figma.com/proto/B7ALOCrKDzjB9fszN8kKBZ?node-id=0-1&t=cVDxAmZ30KtGxiOv-6"} link={"LINK TO DESIGN"} tag1={"#FREELANCE"} tag2={"#DESIGNER"} titre={"FLUXGROUP"} backgroundColor="#ffffff"/>
          <Certification navigation={"https://hype-software.com/"} link={"LINK TO WEBSITE"} tag1={"#HYPESOFTWARE"} tag2={"#DESIGNER"} titre={"HYPESWISS"} backgroundColor="#ffffff"/>
          <Certification navigation={"https://www.wpanet.org/"} link={"LINK TO WEBSITE"} tag1={"#DESIGN"} tag2={"#WPA"} titre={"WORLD PSY"} backgroundColor="#ffffff"/>
      </div>

    </div>
    )
  });

export default Ceertification;