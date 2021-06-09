import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { zIndex } from '@styles';

const StyledNav = styled.nav`
  position: fixed;
  top: 65px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  z-index: ${zIndex.level8};
  box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  background: ${({ theme }) => theme.colors.lightGray};
`;

const baseLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin: 20px 5px 20px 5px;
  border-right: 3px solid transparent;
  path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.blue};

    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }

  path {
    transition: 0.3s;
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.darkGray};
    }
  }

  ${baseLinkStyles}
`;

export { StyledNav, StyledNavLink };
