import styled from 'styled-components';

export default styled.main<{ headerHeight: number; navigationWidth: number }>`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  margin-left: ${({ navigationWidth }) => navigationWidth}px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  padding: 30px;
`;
