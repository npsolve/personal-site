import React from 'react';
import { Link } from 'gatsby';

import Layout from './../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <br />
      <p>It seems, you have tried to access a page which is unavailable.</p>
      <br />
      <p>
        You can <Link to="/">head home</Link> for now.
      </p>
    </Layout>
  );
};

export default NotFound;
