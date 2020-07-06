import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

import Layout from './../components/Layout';
const MacintoshScene = loadable(() => import('./../components/Macintosh'));

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

const Index = () => (
  <Layout>
    <StyledContainer>
      <MacintoshScene />
    </StyledContainer>
  </Layout>
);

export default Index;
