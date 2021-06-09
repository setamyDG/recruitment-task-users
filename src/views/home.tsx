import React, { ChangeEvent, FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Layout } from '@components/layout';
import { Container, PageTitle, Section } from '@components/common';
import { getUsers, User } from '@utils/getUsers';
import { Card, Searchbar, GridContainer } from '@components/home';

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
