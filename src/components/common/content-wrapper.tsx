import React, { FC } from 'react';
import ErrorOverlay from './error-overlay';
import Spinner from './spinner';

type Props = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
};

const ContentWrapper: FC<Props> = ({ children, isError, isLoading, refetch }) => (
  <>
    {isLoading && <Spinner />}
    {isError && <ErrorOverlay onClick={refetch} />}
    {!isLoading && !isError && children}
  </>
);

export default ContentWrapper;
