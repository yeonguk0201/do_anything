import { useState, useEffect } from 'react';
import {
  Container,
  SliderWrapper,
  SliderInner,
  ItemContainer,
  ItemContent,
  ItemInfoContainer,
  ItemDlRowBox,
  ItemInfoTitle,
  ItemInfoDesc,
  ItemName,
  ItemLink,
  ItemImgContainer,
  ItemImgFigure,
  ItemImgBtn,
  ItemInnerImgBox,
  Img,
} from './MainPageProductSlider.styles';

const MainPageProductSlider = () => {
  const [transformX, setTransformX] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const maxTransformX = -250; // 슬라이드가 이동할 최대 거리 (-250vw)

    //가로 슬라이드 위치 계산
    const newTransformX = (-1 / 9) * currentScrollY + 880 / 18;

    if (newTransformX < maxTransformX) {
      setTransformX(maxTransformX);
    } else if (newTransformX < 0) {
      setTransformX(newTransformX);
    } else {
      setTransformX(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <SliderWrapper style={{ transform: `translateX(${transformX}vw)`, transition: 'transform 0.5s cubic-bezier(.4,.92,1,.94)' }}>
        <SliderInner>
          <ItemContainer>
            <ItemContent>
              <ItemInfoContainer>
                <ItemDlRowBox>
                  <ItemInfoTitle>This is One</ItemInfoTitle>
                  <ItemInfoDesc>ONe is one</ItemInfoDesc>
                  <ItemInfoTitle>This is One</ItemInfoTitle>
                  <ItemInfoDesc>ONe is one</ItemInfoDesc>
                  <ItemInfoTitle>This is One</ItemInfoTitle>
                  <ItemInfoDesc>ONe is one</ItemInfoDesc>
                </ItemDlRowBox>
              </ItemInfoContainer>
              <ItemName>
                Octogonal<br></br>Salt Cellar
              </ItemName>
              <ItemLink></ItemLink>
            </ItemContent>
            <ItemImgContainer>
              <ItemImgFigure>
                <ItemImgBtn></ItemImgBtn>
                <ItemInnerImgBox>
                  <Img src="../../sample.png"></Img>
                </ItemInnerImgBox>
              </ItemImgFigure>
            </ItemImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemContent>
              <ItemInfoContainer>
                <ItemDlRowBox>
                  <ItemInfoTitle>This is Two</ItemInfoTitle>
                  <ItemInfoDesc>TWo is two</ItemInfoDesc>
                </ItemDlRowBox>
              </ItemInfoContainer>
              <ItemName>Octogonal Salt Cellar</ItemName>
              <ItemLink></ItemLink>
            </ItemContent>
            <ItemImgContainer>
              <ItemImgFigure>
                <ItemImgBtn></ItemImgBtn>
                <ItemInnerImgBox>
                  <Img src="../../sample.png"></Img>
                </ItemInnerImgBox>
              </ItemImgFigure>
            </ItemImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemContent>
              <ItemInfoContainer>
                <ItemDlRowBox>
                  <ItemInfoTitle>This is Threee</ItemInfoTitle>
                  <ItemInfoDesc>THree is three</ItemInfoDesc>
                </ItemDlRowBox>
              </ItemInfoContainer>
              <ItemName>Octogonal Salt Cellar</ItemName>
              <ItemLink></ItemLink>
            </ItemContent>
            <ItemImgContainer>
              <ItemImgFigure>
                <ItemImgBtn></ItemImgBtn>
                <ItemInnerImgBox>
                  <Img src="../../sample.png"></Img>
                </ItemInnerImgBox>
              </ItemImgFigure>
            </ItemImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemContent>
              <ItemInfoContainer>
                <ItemDlRowBox>
                  <ItemInfoTitle>This is Four</ItemInfoTitle>
                  <ItemInfoDesc>FOur is four</ItemInfoDesc>
                </ItemDlRowBox>
              </ItemInfoContainer>
              <ItemName>Octogonal Salt Cellar</ItemName>
              <ItemLink></ItemLink>
            </ItemContent>
            <ItemImgContainer>
              <ItemImgFigure>
                <ItemImgBtn></ItemImgBtn>
                <ItemInnerImgBox>
                  <Img src="../../sample.png"></Img>
                </ItemInnerImgBox>
              </ItemImgFigure>
            </ItemImgContainer>
          </ItemContainer>
        </SliderInner>
      </SliderWrapper>
    </Container>
  );
};

export default MainPageProductSlider;
