import React, { FC } from 'react';
import { Layout } from '@components/layout';
import { Container } from '@components/common';
import styled from 'styled-components';
import Card from '@components/common/card';
import SearchbarComponent from '@components/common/searchbar';

const Section = styled.section`
  padding: 40px 0px;
`;

const GridContainer = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(450px, auto));
  grid-gap: 18px;
  grid-template-areas: 'card1 card1 card2 card2 card3 card3';
`;

const StyledTitle = styled.h1`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Home: FC = () => (
  <Layout>
    <Section>
      <Container>
        <StyledTitle>USERS</StyledTitle>
        <SearchbarComponent placeholder='Search' value='' onChange={() => undefined} handleDelete={() => undefined} />
        <GridContainer>
          <Card gridArea='card1' />
          <Card gridArea='card2' />
          <Card gridArea='card3' />
        </GridContainer>
      </Container>
    </Section>
  </Layout>
);

export default Home;
