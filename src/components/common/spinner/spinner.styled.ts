import styled, { css, keyframes } from 'styled-components';
import { media } from '@styles';

const Spin = keyframes`
  0% { transform: rotate(0deg) };
  100% { transform: rotate(360deg) };
`;

const SpinnerWrapper = styled.div<{ inline?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ inline }) => {
    if (inline) {
      return css`
        position: static;
      `;
    }
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-150%, -50%);

      ${media.phone} {
        transform: translate(-50%, -50%);
      }
    `;
  }}
`;

const SpinnerCircle = styled.span<{ hasMessage?: boolean }>`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-top: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${Spin} 2s ease-in-out infinite;
  margin-bottom: ${({ hasMessage }) => (hasMessage ? '10px' : '0')};
`;

export { SpinnerCircle, SpinnerWrapper };
