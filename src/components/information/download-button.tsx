import React, { FC } from 'react';
import { PDF } from '@constants/urls';
import { StyledButton, Wrapper } from './download.button.styled';

const DownloadButton: FC = () => (
  <Wrapper>
    <a href={PDF} target='_blank' rel='noopener noreferrer' download>
      <StyledButton>Download PDF</StyledButton>
    </a>
  </Wrapper>
);
export default DownloadButton;
