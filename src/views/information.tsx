import React, { FC } from 'react';
import { Layout } from '@components/layout';
import { Container, PageTitle, Section } from '@components/common';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 25px;
`;

const DownloadButtonFile = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 40px;
  border: 0;
  outline: none;
  margin-top: 50px;
  transition: 0.3s box-shadow ease-in-out;
  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  }
`;
const taskSteps = [
  {
    id: 1,
    description: 'Stwórz nowe repozytorium a w nim projekt w React',
  },
  {
    id: 2,
    description: 'Pobierz listę użytkowników używając ogólnodostępnego API',
    link: 'https://jsonplaceholder.typicode.com/users',
  },
  {
    id: 3,
    description: 'Wyświetl listę na ekranie',
  },
  {
    id: 4,
    description:
      'Dodaj pole do wyszukiwania użytkownika po imieniui nazwisku i  zaimplementujmechanizmwyszukiwania po stronie front end. Pamiętaj,żeby kod i testy spełniałystandardy produkcyjne, jeśli chodzi o jakość i dobrepraktyki',
  },
  {
    id: 5,
    description: 'Cały projekt wyślij na repozytorium i prześlijnam do niego link',
  },
];
const Information: FC = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle title='Informations' />
        {taskSteps.map(({ id, description, link }) => (
          <ul key={id}>
            <li>
              {description}
              <StyledLink target='_blank' rel='noopener noreferrer' href='https://jsonplaceholder.typicode.com/users'>
                {link}
              </StyledLink>
            </li>
          </ul>
        ))}
        <a href='./React - Zadanie rekrutacyjne.pdf' target='_blank' download>
          <DownloadButtonFile>Download PDF</DownloadButtonFile>
        </a>
      </Container>
    </Section>
  </Layout>
);

export default Information;
