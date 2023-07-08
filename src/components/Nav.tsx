import { useRefsContext } from '../hooks/useRefsContext';

const Nav = () => {
  const { navRef } = useRefsContext();

  return (
    <nav
      className='nav h-36 w-full px-24 uppercase leading-relaxed bg-black absolute z-50 top-0'
      ref={navRef}
    >
      <div className='logo'>
        <h3 className='nav__logo text-5xl inline-block justify-self-start cursor-pointer'>
          N.M.
        </h3>
      </div>
      <ul className='nav__list flex justify-between items-center text-2xl cursor-pointer tracking-widest'>
        <li className='nav__list--item'>About</li>
        <li className='nav__list--item'>Projects</li>
        <li className='nav__list--item'>Contact</li>
      </ul>
      <div className='nav__search justify-self-end inline-block'></div>
    </nav>
  );
};

export default Nav;
