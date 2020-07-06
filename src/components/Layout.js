import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import GlobalStyle from './GlobalStyle';

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

const TitleLink = styled(Link)`
  text-transform: underline;
  color: #000;
  text-decoration: none;
  border: none;

  &:hover {
    color: #0000ff;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Favicon />

      <Helmet>
        <title>Rahul Ranjan</title>
        <meta property="og:title" content="Rahul Ranjan" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rudrakos.com" />
        <meta
          property="og:image"
          content="https://rudrakos.com/social-meta.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://rudrakos.com/social-meta.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rahul Ranjan" />
        <meta name="twitter:description" content="Personal Website" />
        <meta
          name="twitter:image"
          content="https://rudrakos.com/social-meta.png"
        />
        <meta name="twitter:creator" content="@npsolve" />
      </Helmet>

      <StyledHeader>
        <StyledTitle>
          <TitleLink to="/">Rudrakos</TitleLink>
        </StyledTitle>

        <Nav />
      </StyledHeader>

      {children}
    </Main>
  );
};

export default Layout;
