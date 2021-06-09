import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const SEO: FC<Props> = ({ title, children }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='title' content='React - Recruitment task' data-react-helmet='true' />
    <meta property='og:title' content='DG - React recruitment task' react-helmet-data='true' />
    <meta property='og:type' content='website' react-helmet-data='true' />
    <meta property='twitter:card' content='summary' react-helmet-data='true' />
    <meta property='twitter:creator' content='Daniel Gola' react-helmet-data='true' />
    <meta property='twitter:title' content='DG - React recruitment task' react-helmet-data='true' />
    <meta
      property='twitter:description'
      content='React application written in Typescript what allows to filter users taken from API'
      react-helmet-data='true'
    />
    <meta
      property='og:description'
      content='React application written in Typescript what allows to filter users taken from API'
      react-helmet-data='true'
    />
    <meta
      name='description'
      content='React application written in Typescript what allows to filter users taken from API'
      react-helmet-data='true'
    />
    <link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap' rel='stylesheet' />
    {children}
  </Helmet>
);

export default SEO;
