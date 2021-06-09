import React, { FC } from 'react';
import { StyledButton, Wrapper } from './download.button.styled';

const DownloadButton: FC = () => (
  <Wrapper>
    <a href='./React - Zadanie rekrutacyjne.pdf' target='_blank' download>
      <StyledButton>Download PDF</StyledButton>
    </a>
  </Wrapper>
);
export default DownloadButton;
