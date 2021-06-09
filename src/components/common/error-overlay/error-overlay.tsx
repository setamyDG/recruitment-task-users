import React, { FC } from 'react';
import { ReactComponent as RefreshIcon } from '@assets/icons/refresh.svg';
import { Wrapper, Refresh, AutomaticRefreshInfo } from './error-overlay.styled';

type Props = {
  onClick: () => void;
};

const ErrorOverlay: FC<Props> = ({ onClick }) => (
  <Wrapper>
    <p>can not show data</p>
    <AutomaticRefreshInfo>Try to refresh</AutomaticRefreshInfo>
    <Refresh onClick={onClick}>
      <RefreshIcon />
    </Refresh>
  </Wrapper>
);

export default ErrorOverlay;
