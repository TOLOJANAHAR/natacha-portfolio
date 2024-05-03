import React, { useRef, useEffect} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";

import './first.css';
import Nav from './components/nav/navigation'
import Description from './components/description/description'
import Projet from "./components/Projet/projet";
import Ceertification from "./components/certification/certification";
import Technologie from "./components/Technologies/tech";
import Footer from "./components/footer/footer";
import Scroll from "./components/scroll/scroll";
import logoo from './image/logo.png';


export default function App() {
  const container = useRef();
  const navbar = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
      //GSAP
      gsap.to(".Tech", {
        scrollTrigger: {
          trigger: ".Tech",
          start: "80% 90%",
          end: "90% 50%",
          scrub: 4,
          //markers: true,
          //pinSpacing: false,
          toggleActions: "restart pause reverse pause"
        },
        width: 1350,
        marginLeft: 10,
        borderRadius: '50px',
        y:-1650
      });

      //GSAP award
      gsap.to(".expbox", {
        scrollTrigger: {
          trigger: ".expbox",
          start: "top 60%",
          end: "bottom 30%",
          scrub: true,
          //markers: true,
          pinSpacing: false,
          toggleActions: "restart pause reverse pause"
        },
        height:120,
        fontSize: 55
      });
      gsap.to(".experiences", {
        scrollTrigger: {
          trigger: ".experiences",
          start: "top 60%",
          end: "bottom 30%",
          scrub: 2,
          //markers: true,
          pinSpacing: false,
          toggleActions: "restart pause reverse pause"
        },
        y:-10,
        x: -180,
        height:150,
      });

      gsap.to(".awardScroll", {
        scrollTrigger: {
          trigger: ".awardScroll",
          start: "top 40%",
          end: "bottom 20%",
          scrub: true,
          //markers: true,
          pinSpacing: false,
          toggleActions: "restart pause reverse pause"
        },
        height:120,
      });
      gsap.to(navbar.current, {
        scrollTrigger: {
          trigger: ".page",
          start: "10% top",
          //markers: true,
          end: "bottom top",
          toggleClass: {targets: navbar.current, className: "navbar-visible"},
          scrub: true
        }
      });

  }, {scope:container});

  function NavNoir({ titre, onClick }) {
    return (
      <button className='linknav' onClick={onClick}>
        {titre} 
      </button>
    );
  }
  
  const aboutToRef = useRef(null);
  const projetToRef = useRef(null);
  const certToRef = useRef(null);
  const footerToRef = useRef(null);
  const aboutPart = () => {
    aboutToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const projetPart = () => {
    projetToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const certPart = () => {
    certToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const footerPart = () => {
    footerToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={container} className='page' >
      <div ref={navbar} className='navbar'>
        <img className='logon' src={logoo} alt={logoo}/>
        <div className='navnoirContent'>
          <NavNoir titre={"About"} onClick={aboutPart} />
          <NavNoir titre={"Work"} onClick={projetPart} />
          <NavNoir titre={"Awards"} onClick={certPart} />
          <NavNoir titre={"Contacts"} onClick={footerPart} />
        </div>
      </div>
      < Nav />
      < Description ref={aboutToRef}/>
      <div className='expbox'>
        <p className='experiences'>ECE🔥EXPRERIENCE🔥EXPERIENCE🔥EXPERIENCE🔥EXPERIENCE🔥</p>
      </div>
      < Projet ref={projetToRef} />
      <div className='awardScroll'>
        <p className='award'>AWARD AND PRODUCTS FREEBIES AWARD AND PRODUCTS AWARD AND PRODUCTS FREEBIES AWARD AND PRODUCTS</p>
      </div>
      < Ceertification ref={certToRef}/>
      < Technologie  />
      < Footer ref={footerToRef} />
      <Scroll />

    </div>
  );


}



