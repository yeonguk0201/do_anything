import styled from 'styled-components';

interface HeaderMenuBoxProps {
  menuOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
  justify-content: space-between;
  position: fixed;
  top: 23px;
  z-index: 2;
  background-color: red;
`;

export const BurgerBtn = styled.button`
  display: flex;
  width: 40px;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-left: 15px;
  border: 1px solid black;

  &:hover > div:first-child {
    width: 25px;
  }

  &:hover > div:last-child {
    width: 35px;
  }
`;

export const Burger = styled.div<HeaderMenuBoxProps>`
  width: 30px;
  height: 4px;
  background-color: black;
  transition: width 0.3s ease;
  background-color: ${({ menuOpen }) => (menuOpen ? '#FBCCCC' : 'black')};
`;

export const HeaderLogo = styled.a`
  font-weight: bold;
`;

export const ShoppingBtn = styled.button<HeaderMenuBoxProps>`
  display: flex;
  width: 40px;
  font-size: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  border: 1px solid black;
  color: ${({ menuOpen }) => (menuOpen ? '#FBCCCC' : 'black')};
`;

export const HeaderMenuBox = styled.div<HeaderMenuBoxProps>`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
  z-index: 1;
`;

export const HeaderMenuBoxNav = styled.nav`
  margin-top: 20px;
`;

export const NavUl = styled.ul`
  list-style-type: none;
`;

export const NavUlLi = styled.li`
  padding: 10px 0;
  cursor: pointer;
`;

export const SubMenu = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;

export const SubLi = styled.li`
  padding: 10px 0;
  cursor: pointer;
`;

export const LogoSvg = styled.svg<HeaderMenuBoxProps>`
  transition: width 0.3s ease, height 0.3s ease, fill 0.2s ease;
`;
