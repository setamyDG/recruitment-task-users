import React, { FC, useEffect, useRef } from 'react';
import photo from '@assets/images/placeholder.jpeg';
import { fromLeftToRight, fromTopToBottom } from '@utils/animations';
import {
  CenterContainer,
  Image,
  UpperContainer,
  Number,
  UserInformation,
  StyledCard,
  Name,
  Username,
  FieldName,
} from './card.styled';

type Props = {
  id: number;
  name: string;
  username: string;
  phone?: string;
  email?: string;
  company?: string;
};

const Card: FC<Props> = ({ id, name, username, phone, company, email }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (cardRef && namesRef) {
      fromLeftToRight(cardRef?.current as HTMLElement, 1.2);
      fromTopToBottom(namesRef?.current as HTMLElement, 1.2);
    }
  }, []);

  return (
    <StyledCard id='card' ref={cardRef}>
      <UpperContainer>
        <Name ref={namesRef}>{name}</Name>
        <FieldName>name</FieldName>
        <Username>@{username}</Username>
        <Image src={photo} alt={name} />
      </UpperContainer>
      <Number>
        <p>{id}</p>
      </Number>
      <CenterContainer>
        <UserInformation>Email: {email}</UserInformation>
        <UserInformation>Phone: {phone}</UserInformation>
        <UserInformation>Company: {company}</UserInformation>
      </CenterContainer>
    </StyledCard>
  );
};

export default Card;
