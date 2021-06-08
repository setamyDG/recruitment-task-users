import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0px 65px;
`;
const Container: FC = ({ children }) => <StyledContainer>{children}</StyledContainer>;
export default Container;
