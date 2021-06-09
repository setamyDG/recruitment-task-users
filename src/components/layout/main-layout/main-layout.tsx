import React, { createRef, FC, useEffect, useState } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import { Navigation } from '../navigation';
import Main from './main-layout.styled';

const MainLayout: FC = ({ children }) => {
  const headerRef = createRef<HTMLDivElement>();
  const navigationRef = createRef<HTMLDivElement>();

  const [headerHeight, setHeaderHeight] = useState(0);
  const [navigationWidth, setNavigationWidth] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setNavigationWidth(navigationRef.current?.offsetWidth || 0);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Navigation ref={navigationRef} />
      <Main headerHeight={headerHeight} navigationWidth={navigationWidth}>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default MainLayout;
