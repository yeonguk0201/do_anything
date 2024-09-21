import styled, { keyframes, css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 120px 80px 0 80px;
  margin-top: 370px;
  // background-color: red;
`;

export const SliderWrapper = styled.div`
  padding: 120px 0 0 80px;
  overflow: hidden;
  // background-color: white;
`;

export const SliderInner = styled.div`
  display: flex;
  height: 750px;
  width: fit-content;
  // background-color: orange;
`;

export const ItemContainer = styled.article`
  display: flex;
  height: 100%;
  position: relative;
  width: 1430px; // 이거 사이즈에 맞게 calc 써서 수정
  // background-color: yellow;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 360px; // 이거 사이즈에 맞게 calc 써서 수정
  height: 100%;
  padding: 0 10px 0 10px;
  // background-color: green;

  &:hover {
  }
`;

export const ItemImgContainer = styled.div`
  width: 1050px; // 이거 사이즈에 맞게 calc 써서 수정
  height: 100%;
  position: relative;
  // background-color: black;
`;

export const ItemInfoContainer = styled.dl`
  // // dl은 dt로 표기한 용어와 dd로 표기한 설명 그룹을 감싸서 설명 목록을 생성하는 것이다. 주로 용어사전 구현이나 메타데이터를 표시할 때 사용한다.
  display: flex;
  flex-direction: column;
  // background-color: blue;
`;

export const ItemDlRowBox = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: calc(1 / 3 * 100% - 2 / 3 * 1rem) auto;
`;

export const ItemInfoTitle = styled.dt`
  text-transform: uppercase;
`;

export const ItemInfoDesc = styled.dd`
  line-height: 1.2;
  // font-size
`;

export const ItemName = styled.h2`
  line-height: 1;
  letter-spacing: -0.02em;
  // font-family
  font-weight: 100;
  font-size: 50px;
  padding-right: 20px;
  margin-top: auto; // 처음엔 작동 안 했는데 이유가 상위 컨텐츠인 ItemContent가 flex가 아니여서 그랬다. 부모 또는 조상 요소가 flex 혹은 grid여야지 auto로 밀어낼 수 있다.
  padding-top: 0.5em;
`;

export const ItemLink = styled.a`
  position: absolute;
  inset: 0;
  display: block;
  cursor: pointer;
  // background-color: purple;
`;

export const ItemImgFigure = styled.figure`
  // // figure는 콘텐츠와 관련된 이미지나 관련 컨텐츠 등의 독립된 컨텐츠를 나타내는 태그다. 관련이 없으면 aside 태그가 적당하다.
  width: 100%;
  height: 100%;
`;

export const ItemImgBtn = styled.button`
  z-index: 1;
  position: absolute;
  inset: 0; // top bottom left right를 대신해서 사용할 수 있는 축약버전이라고 생각하면 된다.
  cursor: zoom-in;
  background-color: transparent;
  display: inline-block;
  overflow: visible;
  margin: 0;
  border: 0;
  outline: 0;
`;

export const ItemInnerImgBox = styled.span`
  overflow: hidden;
  position: absolute;
  inset: 0;
  // clip: rect(0 0 0 0); // clip은 요소의 클릭 범위를 지정한다. 이걸로 요소의 특정 부분만 나오게 할 수 있다.
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const Img = styled.img`
  opacity: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  // transition: scale(1);
`;
