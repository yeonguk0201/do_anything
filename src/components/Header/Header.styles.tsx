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
  background-color: red; // 지우기
`;

export const BurgerBtn = styled.button<HeaderMenuBoxProps>`
  // Props를 제공 받아서 사용하려고
  display: flex;
  width: 40px;
  flex-direction: column;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-left: 15px;
  border: 1px solid black;
  overflow: hidden;
  position: relative; // relative를 넣어야지 아래 div의 position이 BurgerBtn 기준으로 잡힘

  div {
    // 이러면 내부 div 설정
    background-color: ${({ menuOpen }) => (menuOpen ? '#FBCCCC' : 'black')};
    position: absolute;

    &:nth-child(1) {
      width: ${({ menuOpen }) => (menuOpen ? '0px' : '39px')};
      top: calc(50% - 10px);
      align-self: end;
    }
    &:nth-child(2) {
      transform: ${({ menuOpen }) => (menuOpen ? 'translate(0%, 149%) rotate(45deg)' : '')};
      top: calc(50% - 5px);
    }
    &:nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? 'translate(0%, -149%) rotate(-45deg)' : '')};
      bottom: calc(50% - 2px);
    }
    &:nth-child(4) {
      width: ${({ menuOpen }) => (menuOpen ? '0px' : '30px')};
      bottom: calc(50% - 7px);
    }
  }

  &:hover > div:first-child {
    width: ${({ menuOpen }) => (menuOpen ? '0px' : '30px')};
  }
`;

export const Burger = styled.div`
  width: 39px;
  height: 2px;
  background-color: black;
  transition: width 0.3s ease, transform 0.3s ease;
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
  // svg도 이렇게 할 수 있다.
  transition: width 0.3s ease, height 0.3s ease, fill 0.2s ease;
`;
