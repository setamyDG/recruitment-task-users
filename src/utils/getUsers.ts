import { API_URL } from '@constants/api_url';

export type User = [
  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
];

export const getUsers = async (): Promise<User> => {
  const response = await fetch(API_URL);
  return response.json();
};
