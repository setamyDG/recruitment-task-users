import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

const SEO: FC<Props> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap' rel='stylesheet' />
  </Helmet>
);

export default SEO;
