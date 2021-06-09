import React, { ChangeEvent, FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Container, PageTitle, Section, ContentWrapper } from '@components/common';
import { getUsers, User } from '@utils/getUsers';
import { Card, Searchbar, GridContainer } from '@components/home';

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, refetch, isError, isLoading } = useQuery<User, Error>('fetchUsers', () => getUsers());

  const handleOnChangeSearchbar = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const newData = data?.filter(({ name }) => (name as string).toUpperCase().includes(searchValue.toUpperCase()));

  return (
    <Section>
      <Container>
        <PageTitle title={`${newData?.length}x Users`} />
        <Searchbar
          value={searchValue}
          onChange={handleOnChangeSearchbar}
          handleDelete={() => {
            setSearchValue('');
          }}
        />
        <GridContainer>
          <ContentWrapper refetch={refetch} isLoading={isLoading} isError={isError}>
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
          </ContentWrapper>
        </GridContainer>
      </Container>
    </Section>
  );
};

export default Home;
