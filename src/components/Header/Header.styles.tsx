import styled from 'styled-components';

interface HeaderMenuBoxProps {
  menuOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 64px;
  justify-content: space-between;
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

export const Burger = styled.div`
  width: 30px;
  height: 4px;
  background-color: black;
  transition: all 0.3s ease;

  // &:first-child:hover {
  //   width: 25px;
  // }

  // &:last-child:hover {
  //   width: 35px;
  // }
`;

export const HeaderLogo = styled.a`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const ShoppingBtn = styled.button`
  display: flex;
  width: 40px;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 15px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  border: 1px solid black;
`;

export const HeaderMenuBox = styled.div<HeaderMenuBoxProps>`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  background-color: #f4f4f4;
  padding: 20px;
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
