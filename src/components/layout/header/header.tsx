import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '@components/common';
import { StyledHeader, Title } from './header.styled';

type Ref = HTMLDivElement;
type HeaderProps = {
  ref: HTMLDivElement;
};

const Header = forwardRef<Ref, HeaderProps>((_, ref) => (
  <StyledHeader ref={ref}>
    <NavLink to='/'>
      <Logo />
    </NavLink>
    <Title>Recruitment task</Title>
  </StyledHeader>
));

Header.displayName = 'Header';

export default Header;
