import React, { FC } from 'react';
import { Layout } from '@components/layout';
import { Container } from '@components/common';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 0px;
`;
const Information: FC = () => (
  <Layout>
    <Section>
      <Container>
        <h1>INFORMATION</h1>
      </Container>
    </Section>
  </Layout>
);

export default Information;
