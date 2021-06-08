import styled from 'styled-components';
import zIndex from '@styles/zIndex';

const StyledHeader = styled.header`
  padding: 15px 30px;
  box-shadow: ${({ theme }) => theme.boxShadow.dp_1};
  background: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.level9};
`;

const Title = styled.p`
  position: absolute;
  font-size: 0.825rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { StyledHeader, Title };
