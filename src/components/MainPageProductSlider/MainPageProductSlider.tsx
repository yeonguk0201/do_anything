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
  return (
    <Container>
      <SliderWrapper>
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
                  <Img></Img>
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
                  <Img></Img>
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
                  <Img></Img>
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
