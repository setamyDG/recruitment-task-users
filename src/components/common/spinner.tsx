import React, { FC } from 'react';
import { SpinnerCircle, SpinnerWrapper } from './spinner.styled';

type SpinnerProps = {
  message?: string;
  inline?: boolean;
  className?: string;
};

const Spinner: FC<SpinnerProps> = ({ message, inline, className }) => (
  <SpinnerWrapper data-testid='spinner' inline={inline} className={className}>
    <SpinnerCircle hasMessage={!!message} />
    {message ? <p>{message}</p> : undefined}
  </SpinnerWrapper>
);

export default Spinner;
