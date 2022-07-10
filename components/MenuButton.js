import ButtonMore from "./ButtonMore";

export default function MenuButton({ isSideMenuOpen }) {
  return (
    <div className='menu__btn__container'>
      <div className='menu__btns'>
        <div className='menu__btn__more'>
          <ButtonMore />
        </div>
        <div className='menu__btn__menu'>
          <p>MENU</p>
        </div>
      </div>
      {isSideMenuOpen && (
        <div className={`menu__btn__close ${isSideMenuOpen ? "active" : ""}`}>
          <div className='menu__btn__line'></div>
          <div className='menu__btn__line'></div>
        </div>
      )}
    </div>
  );
}
