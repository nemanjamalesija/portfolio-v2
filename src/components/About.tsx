import { useEffect } from 'react';
import about from '../assets/images/about.webp';
import { useRefsContext } from '../hooks/useRefsContext';

const About = () => {
  const { aboutRef, navRef } = useRefsContext();

  useEffect(() => {
    const handleScroll = function () {
      if (!aboutRef.current || !navRef.current) return;

      const initialCoords = aboutRef.current.getBoundingClientRect();

      if (window.scrollY > initialCoords.top)
        navRef.current.classList.add('sticky');
      else navRef.current.classList.remove('sticky');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutRef, navRef]);

  return (
    <section className='section about py-36' ref={aboutRef}>
      <div className='about__left'>
        <img
          src={about}
          alt='About me illustration'
          className='about__left-image'
        />
      </div>
      <div className='about__right'>
        <h3 className='heading-tertiary inline-block font-medium uppercase'>
          About me
        </h3>
        <blockquote className='about__blockquote'>
          Hi, I'm Nemanja, a full-stack web developer with a passion for
          creating beautiful and functional websites. I believe that coding is
          both an art and a science, and I always strive to find the right
          balance between form and function. Feel free to browse my portfolio
          and get in touch if you have any questions or if you'd like to work
          together on a project.
        </blockquote>
      </div>
    </section>
  );
};

export default About;
