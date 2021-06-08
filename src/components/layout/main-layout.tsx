import React, { createRef, FC, useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main-layout.styled';
import Navigation from './navigation';

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
