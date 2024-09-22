import { useState, useEffect, MouseEvent } from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Container, BurgerBtn, Burger, HeaderLogo, ShoppingBtn, HeaderMenuBox, HeaderMenuBoxNav, NavUl, NavUlLi, NavUlLiBox, NavUlLiText, SubMenu, SubLi, LogoSvg } from './Header.styles';

// interface Category {
//   id: number;
//   name: string;
// }

// const fetchCategories = async (): Promise<Category[]> => {
//   const response = await axios.get('https://localhost:3001/api/categories');
//   return response.data;
// };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [svgSize, setSvgSize] = useState({ width: 800, height: 300 });
  const [topPosition, setTopPosition] = useState(23); // 사이드 메뉴랑 svg사이즈, 배너가 살짝 움직이게 top 위치를 지정하는 state
  const [skew, setSkew] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    // MouseEvent는 마우스와 관련된 이벤트를 나타내는 typescript의 타입이다. 이 타입은 마우스 이벤트(mousemove, click) 등을 설명하는데 사용된다. 또한 마우스의 위치나 버튼 클릭 상태, 클릭된 요소 등 여러가지 정보를 포함한다.
    //HTMLAnchorElement는 a태그를 나타내는 typescript의 타입이다. a태그에 특화된 프로퍼티와 메서드를 제공한다.
    // 따라서 MouseEvent 객체가 a 태그에서 발생한 마우스 이벤트임을 명시한 것이다.
    const { left, width } = e.currentTarget.getBoundingClientRect(); // e.target과 다른 점은 target은 이벤트가 실제로 발생한 요소를 참조하고 currentTarget은 이벤트 리스너가 붙은 요소를 참조한다.
    // getBoundingClientRect는 요소의 크기와 위치를 담은 DomRect 객체를 반환한다. 여기서 해당 요소의 left나 width를 가져온거다.
    const mouseX = e.clientX - left; // e.clientX는 이벤트가 발생한 X좌표를 반환한다. 마우스 이벤트에서느 마우스의 X좌표를 알 수 있다.
    const percentage = mouseX / width - 0.5; // 0.5을 빼서 [-0.5, 0.5] 범위로 조정
    const skewValue = percentage * -30; // +15deg에서 -15deg까지 스케일 조정
    setSkew(skewValue);
  };
  // const {
  //   data: categories,
  //   error,
  //   isLoading,
  // } = useQuery<Category[]>({
  //   queryKey: ['categories'],
  //   queryFn: fetchCategories,
  // });
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading Category</div>;

  useEffect(() => {
    // 스크롤을 하면 svg 사이즈가 조절되는 기능. useEffect를 사용해서 변수를 바꾼다. return은
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScoll = document.documentElement.scrollHeight - window.innerHeight;

      const scale = Math.max(0.2, 1 - (scrollPosition / maxScoll) * 8);

      setSvgSize({
        width: 800 * scale,
        height: 300 * scale,
      });

      const newTop = Math.max(-2, 23 - scrollPosition / 2);
      setTopPosition(newTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // menuOpen이면 스크롤을 막기위해 overflow를 hidden으로 바꿨다.
  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  // }, [menuOpen]);

  let svgProps = {
    // 초기 svg 설정, 아래 if문을 통해 값을 바꾸려고 따로 설정했다. 사이드 메뉴 open이 true면 저 변수를 사용한다.
    width: svgSize.width,
    height: svgSize.height,
    fill: 'black',
  };

  if (menuOpen) {
    svgProps = {
      width: 240,
      height: 90,
      fill: '#FBCCCC',
    };
  }

  return (
    <div>
      <Container style={{ top: `${topPosition}px` }}>
        {' '}
        {/*top을 변수로 받아서 바로바로 바꾸려고 여기다가 넣었다.*/}
        <BurgerBtn menuOpen={menuOpen} onClick={toggleMenu}>
          {' '}
          {/*menuOpen이라는 state를 받아서 던진다.*/}
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
        </BurgerBtn>
        <HeaderLogo href="#">
          <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width={svgProps.width} height={svgProps.height} menuOpen={menuOpen}>
            {/*svg도 이렇게 직접 만들 수 있다. width랑 height는 변수로 받고 menuOpen은 파라미터로 전달*/}
            <text x="0" y="15" fontFamily="Arial" fontSize="15" fill={svgProps.fill}>
              <tspan x="23" dy="-7">
                {/*x랑 y를 지정해서 위치를 다르게 함*/}
                Design
              </tspan>
              <tspan x="32" dy="15">
                Logo
              </tspan>
            </text>
          </LogoSvg>
        </HeaderLogo>
        <ShoppingBtn menuOpen={menuOpen}>
          {/*여기도 파라미터 전달*/}
          <HiOutlineShoppingCart></HiOutlineShoppingCart>
        </ShoppingBtn>
      </Container>
      <HeaderMenuBox menuOpen={menuOpen}>
        <HeaderMenuBoxNav>
          {/* <NavUl>
            {categories?.map((category) => (
              <NavUlLi key={category.id}>{category.name}</NavUlLi>
            ))}
          </NavUl> */}
          <NavUl>
            <NavUlLi delay={0.6} menuOpen={menuOpen} style={{ order: '1' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  All
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi delay={0.65} menuOpen={menuOpen} style={{ order: '2' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  Coasters
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi delay={0.7} menuOpen={menuOpen} style={{ order: '4' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  Planters
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi delay={0.75} menuOpen={menuOpen} style={{ order: '5' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  Candles
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi delay={0.8} menuOpen={menuOpen} style={{ order: '6' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  Clocks
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi delay={0.85} menuOpen={menuOpen} style={{ order: '8' }}>
              <NavUlLiBox>
                <NavUlLiText onMouseMove={handleMouseMove} skew={skew}>
                  Jewelry
                </NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
          </NavUl>
        </HeaderMenuBoxNav>
        <SubMenu delay={0.5} menuOpen={menuOpen}>
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
