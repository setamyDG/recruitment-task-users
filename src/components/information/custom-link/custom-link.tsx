import React, { FC } from 'react';
import StyledLink from './custom-link.styled';

type Props = {
  href: string;
  target: string;
  rel: string;
};
const CustomLink: FC<Props> = ({ children, href, target, rel }) => (
  <StyledLink href={href} rel={rel} target={target}>
    {children}
  </StyledLink>
);
export default CustomLink;
