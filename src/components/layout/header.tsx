import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '@components/common';
import { StyledHeader, Title } from './header.styled';

type Ref = HTMLDivElement;
type HeaderProps = {
  ref: HTMLDivElement;
};

// eslint-disable-next-line react/display-name
const Header = forwardRef<Ref, HeaderProps>((_, ref) => (
  <StyledHeader ref={ref}>
    <NavLink to='/'>
      <Logo />
    </NavLink>
    <Title>Recruitment task</Title>
  </StyledHeader>
));

export default Header;
