import styled from 'styled-components';
import { ReactComponent as Dots } from '@assets/icons/big-dots.svg';
import { ReactComponent as SmallDots } from '@assets/icons/small-dots.svg';
import { media } from '@styles';

const StyledDots = styled(SmallDots)`
  position: absolute;
  left: 20%;
  top: 25%;

  ${media.tablet} {
    display: none;
  }
`;

const StyledBigDots = styled(Dots)`
  position: absolute;
  right: 20%;
  bottom: 25%;

  ${media.tablet} {
    display: none;
  }
`;

const StyledFooter = styled.footer`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;

  ${media.phone} {
    margin-left: 65px;
  }
`;

const Name = styled.p`
  font-size: 0.825rem;
  margin-top: 25px;
  font-weight: 300;
`;

const Year = styled.p`
  font-size: 0.825rem;
  margin-top: 25px;
`;

const Avatar = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export { StyledFooter, Name, Avatar, Year, StyledDots, StyledBigDots };
