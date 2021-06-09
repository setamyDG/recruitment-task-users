import styled from 'styled-components';
import zIndex from '@styles/zIndex';
import { media } from '@styles';

const StyledHeader = styled.header`
  padding: 15px 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.dp_1};
  background: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.level9};
  ${media.tablet} {
    justify-content: center;
  }
`;

const Title = styled.p`
  position: absolute;
  font-family: 'Inter' sans-serif;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet} {
    display: none;
  }
`;

export { StyledHeader, Title };
