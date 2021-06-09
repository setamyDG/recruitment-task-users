import React, { FC } from 'react';
import { Layout } from '@components/layout';
import { Container, PageTitle, Section } from '@components/common';
import { API_URL } from '@constants/api_url';
import { CustomLink, DownloadButton } from '@components/information';
import steps from '@components/information/steps';

const Information: FC = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle title='Informations' />
        {steps.map(({ id, description, link }) => (
          <ul key={id}>
            <li>
              {description}
              <CustomLink target='_blank' rel='noopener noreferrer' href={API_URL}>
                {link}
              </CustomLink>
            </li>
          </ul>
        ))}
        <DownloadButton />
      </Container>
    </Section>
  </Layout>
);

export default Information;
