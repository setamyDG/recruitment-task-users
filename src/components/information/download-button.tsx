import React, { FC } from 'react';
import StyledButton from './download.button.styled';

const DownloadButton: FC = () => (
  <a href='./React - Zadanie rekrutacyjne.pdf' target='_blank' download>
    <StyledButton>Download PDF</StyledButton>
  </a>
);
export default DownloadButton;
