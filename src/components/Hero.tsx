import { useState, useEffect } from 'react';
import { useRefsContext } from '../hooks/useRefsContext';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const { heroRef } = useRefsContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const opacity = (5 - scrollTop / 2 / 100) / 5;
      setOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [opacity]);

  return (
    <section
      className='section hero w-full px-24 bg-black  leading-relaxed fixed top-36 left-0 z-10'
      ref={heroRef}
    >
      <h1
        className='heading-primary'
        style={{ opacity: `${opacity}`, transition: 'opacity 0.1s' }}
      >
        Hi there, <br /> My name is
        <br className='show-for-medium' />
        <span>
          Nemanja Malesija.
          <br className='show-for-medium' />
          I love building
          <br className='show-for-medium' />
          interesting
          <br className='show-for-medium' />
          user experiences
        </span>
      </h1>
      <div className='hero__scroll font-normal'>
        <h4 className='heading-four p-2 uppercase text-center'>
          <span>Scroll</span> <br></br>
          <span>Baby</span>
          <br></br>
          <span>Scroll</span>
        </h4>
      </div>
    </section>
  );
};

export default Hero;
