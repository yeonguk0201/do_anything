import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 750px;
`;

export const ItemContainer = styled.article`
  width: 500px;
  height: 100%;
`;

export const ItemContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  padding: 0 10px 0 10px;
`;

export const ItemInfoContainer = styled.dl`
  // dl은 dt로 표기한 용어와 dd로 표기한 설명 그룹을 감싸서 설명 목록을 생성하는 것이다. 주로 용어사전 구현이나 메타데이터를 표시할 때 사용한다.
  display: flex;
  flex-direction: column;
`;

export const ItemDlRowBox = styled.div`
display: grid;
grid-column-gap
grid-template-columns
`;

export const ItemInfoTitle = styled.dt`
  text-transform: uppercase;
`;

export const ItemInfoDesc = styled.dd`
line-height: 1.2;
font-size
`;

export const ItemName = styled.h2`
line-height: 1;
letter-spacing
font-family
font-weight
font-size
`;

export const ItemLink = styled.a`
  position: absolute;
  inset: 0;
  display: block;
`;

export const ItemImgContainer = styled.div`
  width: 400px;
  height: 100%;
`;

export const ItemImgFigure = styled.figure`
  //figure는 콘텐츠와 관련된 이미지나 관련 컨텐츠 등의 독립된 컨텐츠를 나타내는 태그다. 관련이 없으면 aside 태그가 적당하다.
  width: 100%;
  height: 100%;
`;

export const ItemImgBtn = styled.button`
  z-index: 1;
  position: absolute;
  inset: 0; // top bottom left right를 대신해서 사용할 수 있는 축약버전이라고 생각하면 된다.
  cursor: zoom-in;
`;

export const ItemInnerImgBox = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0); // clip은 요소의 클릭 범위를 지정한다. 이걸로 요소의 특정 부분만 나오게 할 수 있다.
  margin: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
`;

export const Img = styled.img`
  opacity: 1;
  transition: scale(1);
`;
