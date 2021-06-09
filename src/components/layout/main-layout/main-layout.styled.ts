import styled from 'styled-components';
import { media } from '@styles';

export default styled.main<{ headerHeight: number; navigationWidth: number }>`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  margin-left: ${({ navigationWidth }) => navigationWidth}px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  padding: 30px;

  ${media.phone} {
    padding: 0px;
  }
`;
