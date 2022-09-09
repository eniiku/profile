import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
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
          {['about'].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li>
            <button className="app__navbar--btn">
              <AiOutlineMail />
            </button>
          </li>
        </ul>
      </div>
      <div className="app__navbar--menu">
        <HiMenuAlt4 onClick={toggleMenu} />
        {menu && (
          <section>
            <HiX onClick={toggleMenu} />
            <ul className="head--text">
              {['home', 'works', 'about', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <a href="https://github.com/tekyuma">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/davidenikuomehin">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/eniku">
                <FaTwitter />
              </a>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
