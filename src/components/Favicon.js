import React from 'react';
import Helmet from 'react-helmet';

export default () => {
  return (
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};
