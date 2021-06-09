import styled from 'styled-components';
import { media } from '@styles';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  margin-top: 50px;
  position: relative;

  ${media.custom(1250)} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.phone} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
