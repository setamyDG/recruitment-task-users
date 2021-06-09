import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const SEO: FC<Props> = ({ title }) => (
  <Helmet>
    <base />
    <title>{title}</title>
    <meta
      name='description'
      content='React application written in Typescript what allows to filter users taken from API'
    />
    <meta property='og:title' content='DG - React recruitment task' />
    <meta property='og:type' content='website' />
    <meta property='twitter:card' content='summary' />
    <meta property='twitter:creator' content='Daniel Gola' />
    <meta property='twitter:title' content='DG - React recruitment task' />
    <meta
      property='twitter:description'
      content='React application written in Typescript what allows to filter users taken from API'
    />
    <meta
      property='og:description'
      content='React application written in Typescript what allows to filter users taken from API'
    />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='theme-color' content='#000000' />
    <link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap' rel='stylesheet' />
  </Helmet>
);

export default SEO;
