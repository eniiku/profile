import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  return (
    <nav className="app__navbar flex--between">
      <p className="app__navbar--logo">eniku.</p>
      <div className="app__navbar--links flex--center p--text">
        <ul className="flex--center">
          {['works', 'about'].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li>
            <button className="app__navbar--btn">Contact Me</button>
          </li>
        </ul>
      </div>
      <div className="app__navbar--menu">
        <HiMenu onClick={toggleMenu} />
        {menu && (
          <div>
            <HiX onClick={toggleMenu} />
            <ul>
              {['works', 'about'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="app__navbar--btn">Contact Me</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
