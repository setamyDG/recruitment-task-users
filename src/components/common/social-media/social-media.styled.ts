import styled from 'styled-components';
import { media } from '@styles';

const Container = styled.div`
  display: flex;
  margin-top: 15px;
`;

const LogoWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 25px;
  transition: 0.3s all ease-in-out;

  ${media.phone} {
    margin: 0px 10px;
  }

  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
    transform: scale(1.03);
  }
`;

export { LogoWrapper, Container };
