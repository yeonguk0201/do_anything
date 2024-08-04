import { useState } from 'react';
import { Container, BurgerBtn, Burger, HeaderLogo, ShoppingBtn, HeaderMenuBox, HeaderMenuBoxNav, NavUl, NavUlLi, SubMenu, SubLi } from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Container>
        <BurgerBtn onClick={toggleMenu}>
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
        </BurgerBtn>
        <HeaderLogo href="#">Logo</HeaderLogo>
        <ShoppingBtn>📥</ShoppingBtn>
      </Container>
      <HeaderMenuBox menuOpen={menuOpen}>
        <HeaderMenuBoxNav>
          <NavUl>
            <NavUlLi>All</NavUlLi>
            <NavUlLi>Coasters</NavUlLi>
            <NavUlLi>Planters</NavUlLi>
            <NavUlLi>Candles</NavUlLi>
            <NavUlLi>Clocks</NavUlLi>
            <NavUlLi>Jewelry</NavUlLi>
          </NavUl>
        </HeaderMenuBoxNav>
        <SubMenu>
          <SubLi>About</SubLi>
          <SubLi>Facebook</SubLi>
          <SubLi>Instagram</SubLi>
          <SubLi>Contact</SubLi>
          <SubLi>Français</SubLi>
        </SubMenu>
      </HeaderMenuBox>
    </div>
  );
};

export default Header;
