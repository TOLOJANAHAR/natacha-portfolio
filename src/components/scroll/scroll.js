import React, { useRef, useEffect, useState } from "react";
import down from '../../image/down.svg';
import './scroll.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";

export default function Scroll(){
    const [isVisible, setIsVisible] = useState(true);

    // Function to handle toggling visibility
    const toggleVisibility = () => {
      setIsVisible((prevVisible) => !prevVisible);
    };
  
    useEffect(() => {
      // Set up a timeout to toggle visibility every 4 seconds
      const timeout = setTimeout(() => {
        toggleVisibility();
      }, 2000);
  
      return () => clearTimeout(timeout); // Clear the timeout on component unmount
    }, [isVisible]);

    const scrollref = useRef();
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
      // Show/hide navbar on scroll
      gsap.to(scrollref.current, {
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom top",
          toggleClass: {targets: scrollref.current, className: "scroll-visible"},
          scrub: true
        }
      });
    
    }, { scope: scrollref });
    return(
        <div ref={scrollref} className="downcontent">
        {isVisible && (
          <img className="downImage" src={down} alt="down"/>
          )}
      </div>
    )
}