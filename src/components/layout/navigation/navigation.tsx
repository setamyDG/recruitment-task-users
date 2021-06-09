import React, { forwardRef } from 'react';
import { ReactComponent as InfoIcon } from '@assets/icons/info.svg';
import { ReactComponent as UsersIcon } from '@assets/icons/users.svg';
import { StyledNav, StyledNavLink } from './navigation.styled';

type Ref = HTMLDivElement;
type NavigationProps = {
  ref: HTMLDivElement;
};

const Navigation = forwardRef<Ref, NavigationProps>((_, ref) => (
  <StyledNav ref={ref}>
    <div>
      <StyledNavLink exact to='/'>
        <UsersIcon />
      </StyledNavLink>
      <StyledNavLink to='/information'>
        <InfoIcon />
      </StyledNavLink>
    </div>
  </StyledNav>
));

Navigation.displayName = 'Navigation';

export default Navigation;
