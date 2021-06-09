import styled from 'styled-components';
import { media, zIndex } from '@styles';

const StyledCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  position: relative;
  min-height: 400px;
  transition: 0.3s box-shadow ease-in-out;
  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  }

  ${media.tablet} {
    width: 100%;
  }
`;

const UserInformation = styled.p`
  font-size: 0.825rem;
  font-weight: 300;
`;

const Number = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  height: 20px;
  width: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const UpperContainer = styled.div`
  min-height: 200px;
  background: ${({ theme }) => theme.colors.lightGray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const Name = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
`;

const Username = styled.p`
  font-size: 0.85rem;
  margin-top: 10px;
  font-weight: 500;
`;

const FieldName = styled.p`
  font-size: 0.725rem;
`;

const Image = styled.img`
  position: absolute;
  bottom: -45px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  z-index: ${zIndex.level2};
`;

const CenterContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: 70px;
`;

export { CenterContainer, Image, UpperContainer, Number, UserInformation, StyledCard, Name, Username, FieldName };
