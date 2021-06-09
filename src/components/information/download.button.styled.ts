import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 40px;
  border: 0;
  outline: none;
  margin-top: 50px;
  transition: 0.3s box-shadow ease-in-out;
  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  }
`;
