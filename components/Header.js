import Logo from "./logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo__container'>
        <div className='header__logo'>
          <Logo width={100} height={40} viewBox='-100 -50 800 200' />
        </div>
      </div>
      <nav className='navbar'>
        <ul>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
        </ul>
        <div className='header__burger__menu'>
          <div className='header__burger__line'></div>
          <div className='header__burger__line'></div>
          <div className='header__burger__line'></div>
        </div>
      </nav>
    </header>
  );
}
