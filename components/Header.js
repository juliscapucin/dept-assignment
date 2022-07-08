import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Logo from "./logo.svg";

import Sidebar from "./Sidemenu";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className='header'>
      <div className='header__logo__container'>
        <div className='header__logo'>
          <Logo width={100} height={40} viewBox='-100 -50 800 200' />
        </div>
      </div>
      <nav className='navbar'>
        <ul>
          <li>Work</li>
          <li>Culture</li>
          <li>Services</li>
          <li>Insights</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className='header__more__btn'>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
          <div className='header__more__circle'></div>
        </div>
        <div className={`header__burger__button ${showSidebar && "active"}`}>
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <BurgerButton />
          </button>
        </div>
        <div className={`header__sidebar ${showSidebar && "active"}`}>
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
