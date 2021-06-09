import React, { FC } from 'react';
import { Container, PageTitle, Section } from '@components/common';
import { API_URL } from '@constants/urls';
import { CustomLink, DownloadButton } from '@components/information';
import steps from '@components/information/steps';
import SEO from '@components/seo';

const Information: FC = () => (
  <>
    <SEO title='Recruitment task - Informations' />
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
  </>
);

export default Information;
