import Logo from "./logo.svg";

export default function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__logo__container'>
        <div className='footer__logo'>
          <Logo width={100} height={40} viewBox='-100 -50 800 200' />
        </div>
      </div>
    </footer>
  );
}
