import React, { FC } from 'react';
import { ReactComponent as GithubLogo } from '@assets/icons/github.svg';
import { ReactComponent as LinkedinLogo } from '@assets/icons/linkedin.svg';
import { ReactComponent as FacebookLogo } from '@assets/icons/facebook.svg';
import { ReactComponent as FrontendLogo } from '@assets/icons/front-end.svg';
import { GITHUB, LINKEDIN, CODETAIN, FACEBOOK } from '@constants/urls';
import { LogoWrapper, Container } from './social-media.styled';

const SocialMedia: FC = () => (
  <Container>
    <a target='_blank' rel='noopener noreferrer' href={GITHUB}>
      <LogoWrapper>
        <GithubLogo />
      </LogoWrapper>
    </a>
    <a target='_blank' rel='noopener noreferrer' href={LINKEDIN}>
      <LogoWrapper>
        <LinkedinLogo />
      </LogoWrapper>
    </a>
    <a target='_blank' rel='noopener noreferrer' href={FACEBOOK}>
      <LogoWrapper>
        <FacebookLogo />
      </LogoWrapper>
    </a>
    <a target='_blank' rel='noopener noreferrer' href={CODETAIN}>
      <LogoWrapper>
        <FrontendLogo />
      </LogoWrapper>
    </a>
  </Container>
);

export default SocialMedia;
