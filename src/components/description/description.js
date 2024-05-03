import './description.css';
import React, { forwardRef } from 'react';

const Description = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='description'>
      <p className='about' data-speed="2">About</p>
      <section className='scroll-reveal' data-speed="0.5">
        <p>
          <span>
            Helloo!! I'm TOLOJANAHARY Noeline Natacha.
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