import styled, { keyframes, css } from 'styled-components';

interface HeaderMenuBoxProps {
  menuOpen: boolean;
}

interface TextSkewProps {
  skew: number;
}

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
  justify-content: space-between;
  position: fixed;
  top: 23px;
  z-index: 2;
`;

export const BurgerBtn = styled.button<HeaderMenuBoxProps>`
  // Props를 제공 받아서 사용하려고
  display: flex;
  width: 35px;
  flex-direction: column;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-left: 15px;
  overflow: hidden;
  position: relative; // relative를 넣어야지 아래 div의 position이 BurgerBtn 기준으로 잡힘

  div {
    // 이러면 내부 div 설정
    background-color: ${({ menuOpen }) => (menuOpen ? 'var(--main-font-color)' : 'black')};
    position: absolute;

    &:nth-child(1) {
      width: ${({ menuOpen }) => (menuOpen ? '0px' : '35px')};
      top: calc(50% - 11px);
      align-self: end;
    }
    &:nth-child(2) {
      width: ${({ menuOpen }) => (menuOpen ? '33px' : '35px')};
      transform: ${({ menuOpen }) => (menuOpen ? 'translate(0%, 149%) rotate(45deg)' : '')};
      top: calc(50% - 5px);
    }
    &:nth-child(3) {
      width: ${({ menuOpen }) => (menuOpen ? '33px' : '35px')};
      transform: ${({ menuOpen }) => (menuOpen ? 'translate(0%, -149%) rotate(-45deg)' : '')};
      bottom: calc(50% - 3px);
    }
    &:nth-child(4) {
      width: ${({ menuOpen }) => (menuOpen ? '0px' : '26px')};
      bottom: calc(50% - 9px);
    }
  }

  &:hover > div:first-child {
    width: ${({ menuOpen }) => (menuOpen ? '0px' : '26px')};
  }
`;

export const Burger = styled.div`
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
  font-size: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  color: ${({ menuOpen }) => (menuOpen ? 'var(--main-font-color)' : 'black')};
`;

export const HeaderMenuBox = styled.div<HeaderMenuBoxProps>`
  // 애니메이션 효과를 넣기위해 원래 display none에서 block으로 했는데 none이면 animation이 작동을 안해서 visibility를 변경했다. 그리고 transformY를 -100에서 부터 0으로 해서 내려오는 듯한 애니메이션을 만들었다.
  // 다시 수정해서 맨 위에 slideDown이라는 애니메이션을 만들고 keyframes를 사용했다. styled-component v4버전 부터는 keyframes를 직접 문자열에 삽입하지 않고 css 헬퍼를 사용해야 한다.
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--sub-menu-color);
  z-index: 1;
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'visible')}; // 여기 수정해야 할듯

  /* css 헬퍼 사용 */
  ${({ menuOpen }) =>
    menuOpen
      ? css`
          animation: ${slideDown} 0.5s ease forwards;
        `
      : css`
          animation: ${slideUp} 0.5s ease forwards;
        `}
`;

export const HeaderMenuBoxNav = styled.nav`
  color: var(--main-font-color);
  margin-top: auto;
  padding-bottom: 50px;
`;

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  // '&'표시가 엄청 중요하다. & 없이도 작동을 하긴 하는데 &이게 현재 선택자를 가리키는 선택자라서 이거 없으면 nav 하위 애들한테도 before after가 막 들어간다. 그리고 order도 같은 block 안에 있어야지 작동한다.
  &::before {
    content: '';
    order: 3;
    display: block;
    width: 100%;
  }

  &::after {
    content: '';
    order: 7;
    display: block;
    width: 100%;
  }

  // ul의 li 중 2,4,5 번째의 span에만 content '/'를 삽입했다.
  > li {
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      span {
        &::before {
          content: '/';
          display: inline-block;
          margin: 0 0.2em 0 0.2em;
        }
      }
    }
  }
`;

export const NavUlLi = styled.li`
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const NavUlLiBox = styled.span`
  font-size: 60px;
`;

export const NavUlLiText = styled.a<TextSkewProps>`
  cursor: pointer;
  display: inline-block;
  // inline 요소엔 2D, 3D 변형이 제대로 적용되지 않을 수 있기 때문에 inline-block을 설정했다.
  transition: all 0.2s ease;

  &:hover {
    transform: ${({ skew }) => `skew(${skew}deg)`};
  }
`;

export const SubMenu = styled.ul`
  list-style-type: none;
  color: var(--main-font-color);
  margin-bottom: 90px;
  font-size: 13px;
  font-weight: bolder;
`;

export const SubLi = styled.li`
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: skew(-10deg);
  }
`;

export const LogoSvg = styled.svg<HeaderMenuBoxProps>`
  // svg도 이렇게 할 수 있다.
  transition: width 0.3s ease, height 0.3s ease, fill 0.2s ease;
`;
