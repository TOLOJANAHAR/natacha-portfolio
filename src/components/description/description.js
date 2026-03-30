import './description.css';
import React, { useRef, useEffect, forwardRef } from 'react';

const Description = forwardRef((props, ref) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!spanRef.current) return;

      const rect = spanRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1); 

      spanRef.current.style.backgroundSize = `${progress * 100}% 100%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className='description'>
      <p className='about' data-speed="2">About</p>
      <section className='scroll-reveal' data-speed="1">
        <p>
          <span ref={spanRef}>
            I'm an UI/UX designer, a Frontend and AI Developper.
            My creativity and my experiences will realize your needed into reality.  
          </span>
        </p>
        <p className='petitDescription'>Don't hesitate to contact me, let's collaborate.</p>
      </section>
    </div>
  );
});

export default Description;