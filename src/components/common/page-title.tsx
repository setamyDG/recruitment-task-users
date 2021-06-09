import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => <StyledTitle>{title}</StyledTitle>;
export default PageTitle;
