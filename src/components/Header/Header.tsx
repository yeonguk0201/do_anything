import { useState, useEffect } from 'react';
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

      const scale = Math.max(0.3, 1 - (scrollPosition / maxScoll) * 2.2);

      setSvgSize({
        width: 800 * scale,
        height: 300 * scale,
      });

      const newTop = Math.max(7, 23 - scrollPosition / 7);
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
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>All</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>Coasters</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>Planters</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>Candles</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>Clocks</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
            <NavUlLi>
              <NavUlLiBox>
                <NavUlLiText>Jewelry</NavUlLiText>
              </NavUlLiBox>
            </NavUlLi>
          </NavUl>
        </HeaderMenuBoxNav>
        <SubMenu>
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
