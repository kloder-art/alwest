import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './Header';
import { Footer } from './Footer';
import styled from 'styled-components';

const StyledLayout = styled.div`
  main {
    margin-top: 64px;
  }
`;

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </StyledLayout>
  );
};
