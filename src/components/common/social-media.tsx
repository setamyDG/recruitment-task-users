import React, { FC } from 'react';
import { ReactComponent as GithubLogo } from '@assets/icons/github.svg';
import { ReactComponent as LinkedinLogo } from '@assets/icons/linkedin.svg';
import { ReactComponent as FacebookLogo } from '@assets/icons/facebook.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 15px;
`;

const LogoWrapper = styled.div<{ isMarginLeft?: boolean; isMarginRight?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ isMarginLeft }) => isMarginLeft && '50px'};
  margin-right: ${({ isMarginRight }) => isMarginRight && '50px'};
  transition: 0.3s all ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
    transform: scale(1.03);
  }
`;

const SocialMedia: FC = () => (
  <Container>
    <a target='_blank' rel='noopener noreferrer' href='https://github.com/setamyDG'>
      <LogoWrapper>
        <GithubLogo />
      </LogoWrapper>
    </a>
    <a target='_blank' rel='noopener noreferrer' href='https://pl.linkedin.com/in/daniel--gola'>
      <LogoWrapper isMarginLeft isMarginRight>
        <LinkedinLogo />
      </LogoWrapper>
    </a>
    <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/daniel.gola1'>
      <LogoWrapper>
        <FacebookLogo />
      </LogoWrapper>
    </a>
  </Container>
);

export default SocialMedia;
