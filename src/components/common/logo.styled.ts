import styled from 'styled-components';

export default styled.div`
  padding: 5px 15px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
