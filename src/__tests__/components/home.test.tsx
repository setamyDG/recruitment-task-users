import React from 'react';
import { Card } from '@components/home';
import { waitFor } from '@testing-library/react';
import { setLogger } from 'react-query';
import axios from 'axios';
import { User } from '@utils/getUsers';
import { render } from '../__utils__/test-utils';

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

describe('Card', () => {
  it.each([['Daniel Gola'], ['@nick'], ['Phone: 321'], ['Company: Firma']])(
    'render with correct data',
    async (expectedValues) => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      const data: User = [
        {
          id: 1,
          name: 'Daniel Gola',
          username: 'nick',
          email: 'adres',
          address: {
            street: 'some',
            suite: 'some2',
            city: 'Zielonka',
            zipcode: '65-001',
            geo: {
              lat: '-10',
              lng: '20',
            },
          },
          phone: '321',
          website: 'website',
          company: {
            name: 'Firma',
            catchPhrase: 'phrase',
            bs: 'bs',
          },
        },
      ];
      mockedAxios.get.mockResolvedValueOnce({ data });

      const { getByText } = render(
        <Card
          id={data[0].id}
          name={data[0].name}
          username={data[0].username}
          email={data[0].email}
          phone={data[0].phone}
          company={data[0].company.name}
        />
      );

      await waitFor(
        () => {
          const values = getByText(expectedValues);
          expect(values).toBeInTheDocument();
        },
        { timeout: 2000 }
      );
    }
  );
});
