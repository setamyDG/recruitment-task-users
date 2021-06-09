import React, { FC } from 'react';
import StyledTitle from './page-title.styled';

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => <StyledTitle>{title}</StyledTitle>;
export default PageTitle;
