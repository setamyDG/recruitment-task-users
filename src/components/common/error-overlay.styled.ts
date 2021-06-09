import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const AutomaticRefreshInfo = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

const Refresh = styled(AutomaticRefreshInfo)`
  margin-top: 10px;
  transition: color 0.2s ease-in-out;

  :hover {
    cursor: pointer;
  }
`;

export { Wrapper, Refresh, AutomaticRefreshInfo };
