import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Container, BurgerBtn, Burger, HeaderLogo, ShoppingBtn, HeaderMenuBox, HeaderMenuBoxNav, NavUl, NavUlLi, SubMenu, SubLi, LogoSvg } from './Header.styles';

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
  const [topPosition, setTopPosition] = useState(23);
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

  let svgProps = {
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
        <BurgerBtn onClick={toggleMenu}>
          <Burger menuOpen={menuOpen}></Burger>
          <Burger menuOpen={menuOpen}></Burger>
          <Burger menuOpen={menuOpen}></Burger>
          <Burger menuOpen={menuOpen}></Burger>
        </BurgerBtn>
        <HeaderLogo href="#">
          {' '}
          <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width={svgProps.width} height={svgProps.height} menuOpen={menuOpen}>
            <text x="0" y="15" font-family="Arial" font-size="15" fill={svgProps.fill}>
              <tspan x="23" dy="-7">
                Design
              </tspan>
              <tspan x="32" dy="15">
                Logo
              </tspan>
            </text>
          </LogoSvg>
        </HeaderLogo>
        <ShoppingBtn menuOpen={menuOpen}>
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
            <NavUlLi>All</NavUlLi>
            <NavUlLi>Coasters</NavUlLi>
            <NavUlLi>Planters</NavUlLi>
            <NavUlLi>Candles</NavUlLi>
            <NavUlLi>Clocks</NavUlLi>
            <NavUlLi>Jewelry</NavUlLi>
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
