import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px 15px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const Logo: FC = () => (
  <Wrapper>
    <p>Đ</p>
  </Wrapper>
);

export default Logo;
