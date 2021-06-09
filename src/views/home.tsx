import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Layout } from '@components/layout';
import { Container, Card, Searchbar, PageTitle, Section } from '@components/common';
import media from '@styles/media';
import { getUsers, User } from '@utils/getUsers';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  margin-top: 50px;

  ${media.custom(1250)} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.phone} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data } = useQuery<User, Error>('fetchUsers', () => getUsers());

  const handleOnChangeSearchbar = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const newData = data?.filter(({ name }) => (name as string).toUpperCase().includes(searchValue.toUpperCase()));

  return (
    <Layout>
      <Section>
        <Container>
          <PageTitle title='Users' />
          <Searchbar
            value={searchValue}
            onChange={handleOnChangeSearchbar}
            handleDelete={() => {
              setSearchValue('');
            }}
          />
          <GridContainer>
            {newData?.map(({ id, name, username, email, phone, company: { name: companyName } }) => (
              <Card
                key={id}
                id={id}
                name={name}
                username={username}
                email={email}
                phone={phone}
                company={companyName}
              />
            ))}
          </GridContainer>
        </Container>
      </Section>
    </Layout>
  );
};

export default Home;
