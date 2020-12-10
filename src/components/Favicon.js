import React from 'react';
import Helmet from 'react-helmet';

export default () => {
  return (
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};
