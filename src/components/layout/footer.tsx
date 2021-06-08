import React, { FC } from 'react';
import photo from '@assets/images/photo.jpeg';
import { SocialMedia } from '@components/common';
import { StyledFooter, Name, Avatar, Year, StyledDots, StyledBigDots } from './footer.styled';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Avatar src={photo} alt='avatar' />
      <Name>Daniel Gola</Name>
      <SocialMedia />
      <Year>{year}</Year>
      <StyledDots />
      <StyledBigDots />
    </StyledFooter>
  );
};

export default Footer;
