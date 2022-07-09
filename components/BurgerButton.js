export default function BurgerButton({ isSideMenuOpen }) {
  return (
    <div className={`burger__btn__container ${isSideMenuOpen ? "active" : ""}`}>
      <div className='burger__btn__line'></div>
      <div className='burger__btn__line'></div>
      <div className='burger__btn__line'></div>
    </div>
  );
}
