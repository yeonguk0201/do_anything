import { useState } from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import { Container, BurgerBtn, Burger, HeaderLogo, ShoppingBtn, HeaderMenuBox, HeaderMenuBoxNav, NavUl, NavUlLi, SubMenu, SubLi } from './Header.styles';

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

  return (
    <div>
      <Container>
        <BurgerBtn onClick={toggleMenu}>
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
          <Burger></Burger>
        </BurgerBtn>
        <HeaderLogo href="#">
          {' '}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width="100" height="20">
            <text x="0" y="15" font-family="Arial" font-size="15" fill="black">
              Design Logo
            </text>
          </svg>
        </HeaderLogo>
        <ShoppingBtn>📥</ShoppingBtn>
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
