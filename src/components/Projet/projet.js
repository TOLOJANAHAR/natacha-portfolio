import React, {useEffect, useState, useRef,forwardRef } from "react";
import gsap from "gsap";

import figma from '../../image/Figma.png';
import git from '../../image/git.png';
import fleche from '../../image/fleche.png';
import lock from '../../image/Lock.svg';
import lingustica from '../../image/lingustica.png';
import reserve from '../../image/reserve.png';
import bento from '../../image/bento.png';
import licence from '../../image/licence.png';
import tensorflow from '../../image/tensorflow.png';
 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MotionPathPlugin } from "gsap/all";

import './projet.css';


function Projets({ typeProjet, titreProjet, id, source }) {

  const sendMessage = () => {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=tolojanaharynatachanoeline@gmail.com&su=Project"
  };
    return (
      <div className='bloc' id={`bbloc-${id}`}>
        <img className='typeProjet' src={typeProjet} alt={typeProjet}
          style={{ borderRight: '1px solid #000', paddingRight: '10px' }} />
        <p className='titreProjet'id={`textee-${id}`} >{titreProjet}</p>
        <img className="imagepro" id={`image-${id}`} src={source} alt={"sary"} />
        <button className='lienContact'onClick={sendMessage} >
          <img className='lock'  src={lock} alt={lock} /> CONTACT FOR DETAILS
        </button>
      </div>
    );
  }


  const Projet = forwardRef((props, refProjet) => {
   //image reveal
  const listProjet = useRef(null);
  const blocProjet = useRef(null);
  const [imageIds, setImageIds] = useState([]);
    useEffect(() => {
      const images = document.querySelectorAll('.bloc img[id^="image-"]');
      const ids = Array.from(images).map(image => parseInt(image.id.split('-')[1]));
      setImageIds(ids);
    }, []);
  
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
      imageIds.forEach(id => {
        gsap.to(`#image-${id}`, {
          scrollTrigger: {
            trigger: `#image-${id}`,
            start: "center 30%",
            end: "83.5% 30%",
            scrub: true,
            //markers: true,
            pinSpacing: false,
            toggleActions: "restart pause reverse pause",
            onEnter: () => {
              gsap.set(`#image-${id}`, {
                opacity: 1,
                y: 10
              });
              gsap.set(`#textee-${id}`, { 
                color: "white"
              });
            },
            onEnterBack: () => {
              gsap.set(`#image-${id}`, {
                opacity: 1
              });
              gsap.set(`#textee-${id}`, { 
                color: "white"
              });
            },
            onLeaveBack: () => {
              gsap.set(`#image-${id}`, {
                opacity: 0
              });
              gsap.set(`#textee-${id}`, {
                color: "black"
              });
            },
            onLeave: () => {
              gsap.set(`#image-${id}`, {
                opacity: 0
              });
              gsap.set(`#textee-${id}`, {
                color: "black"
              });
            }
          },
        },
        );
      }); 
      imageIds.forEach(id => {
        gsap.to(`#bbloc-${id}`, {
          scrollTrigger: {
            trigger: `#bbloc-${id}`,
            start: "0% 24%",
            end: "100% 24%",
            scrub: true,
            //markers: true,
            pinSpacing: false,
            toggleActions: "restart pause reverse pause",
            onEnter: () => {
              gsap.set(`#bbloc-${id}`, {
                background: "black",
                color: "white"
              });
            },
            onEnterBack: () => {
              gsap.set(`#bbloc-${id}`, {
                background: "black",
                color: "white"
              });
            },
            onLeaveBack: () => {
              gsap.set(`#bbloc-${id}`, {
                background: "white",
                color: "black"
              });
            },
            onLeave: () => {
              gsap.set(`#bbloc-${id}`, {
                background: "white",
                color: "black"
              });
            }
          }
        });
      });
      // Pinning the title while scrolling
      ScrollTrigger.create({
        trigger: blocProjet.current,
        start: "top top",
        endTrigger: listProjet.current,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        //markers: true,
        opacity: 1
      });
    }, [imageIds]);
    


    return(
    <div ref={refProjet} className='projects_content'>
        <div className='bloctitreProjet' ref={blocProjet}>
          <div className='FirsttitreProjet'>
            <img src={fleche} className='fleche' alt={fleche} />
            <p className='texteProjet'>Projets</p>
          </div>
        </div>
        <div ref={listProjet} className="listeProjet">
          <Projets typeProjet={figma} titreProjet={"Lingusticas - Creative direction, UX/UI"} source={lingustica} id={1} />
          <Projets typeProjet={figma} titreProjet={"Reserve - Mobile Design"} source={reserve} id={2} />
          <Projets typeProjet={git} titreProjet={"Bento - Web App"} source={bento} id={3} />
          <Projets typeProjet={git} titreProjet={"Licence Plate Recognation - AI"} source={licence} id={4} />
          <Projets typeProjet={git} titreProjet={"Tensorflow Training"} source={tensorflow} id={5} />
        </div>
      </div>
    )
  });

  export default Projet;