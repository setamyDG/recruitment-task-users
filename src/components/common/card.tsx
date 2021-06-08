import React, { FC } from 'react';
import styled from 'styled-components';
import photo from '@assets/images/placeholder.jpeg';
import zIndex from '@styles/zIndex';

const StyledCard = styled.div<{ gridArea: string }>`
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
`;

const UserInformation = styled.p`
  font-size: 0.825rem;
`;

const Number = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const UpperContainer = styled.div`
  height: 50%;
  width: 100%;
  padding: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.lightGray};
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  bottom: -45px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  width: 95px;
  height: 95px;
  z-index: ${zIndex.level2};
`;

const CenterContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: 70px;
`;

type Props = {
  gridArea: string;
};
const Card: FC<Props> = ({ gridArea }) => (
  <StyledCard gridArea={gridArea}>
    <UpperContainer>
      <UserInformation>Name: Daniel Gola</UserInformation>
      <UserInformation>Username: @setamyDG</UserInformation>
      <Image src={photo} />
    </UpperContainer>
    <Number>
      <p>1</p>
    </Number>
    <CenterContainer>
      <UserInformation>Email: setamy.dg@gmail.com</UserInformation>
      <UserInformation>Phone: 725-151-351</UserInformation>
      <UserInformation>Company: @setamyDG</UserInformation>
    </CenterContainer>
  </StyledCard>
);

export default Card;
