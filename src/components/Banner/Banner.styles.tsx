import styled, { keyframes } from 'styled-components';

const slide = keyframes`
 from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;
const slide2 = keyframes`
 from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Banner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50px;
  background-color: black;
  overflow: hidden;
  align-items: center;
`;

export const BannerContent = styled.div`
  white-space: nowrap;
  display: inline-block;
  color: white;
  animation: ${slide} 15s linear infinite;
`;

export const BannerContent2 = styled.div`
  white-space: nowrap;
  display: inline-block;
  color: white;
  animation: ${slide2} 15s 7.5s linear infinite;
`;

// 7.5s의 duration을 주어서 무한으로 순환하게 보이게 만들었다.
