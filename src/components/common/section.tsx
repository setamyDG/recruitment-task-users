import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 20px 0px;
`;

const Section: FC = ({ children }) => <StyledSection>{children}</StyledSection>;
export default Section;
