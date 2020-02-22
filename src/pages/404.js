import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import styled from 'styled-components';

const StyledNotFoundPage = styled.div`
  margin: 4rem 0;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <StyledNotFoundPage>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </StyledNotFoundPage>
    </Container>
  </Layout>
);

export default NotFoundPage;
