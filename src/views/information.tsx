import React, { FC } from 'react';
import { Container, PageTitle, Section } from '@components/common';
import { API_URL } from '@constants/api_url';
import { CustomLink, DownloadButton } from '@components/information';
import steps from '@components/information/steps';
import SEO from '@components/seo';

const Information: FC = () => (
  <>
    <SEO title='Information' />
    <Section>
      <Container>
        <PageTitle title='Recruitment task - Informations' />
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
