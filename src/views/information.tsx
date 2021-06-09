import React, { FC } from 'react';
import { API_URL } from '@constants/urls';
import SEO from '@components/seo';
import { Container, PageTitle, Section } from '@components/common';
import { CustomLink, DownloadButton, steps } from '@components/information';

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
