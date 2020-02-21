const path = require('path');

// Taxonomies for detail pages
const taxMap = {
  'allFilmsJson': { component: 'Film.jsx', slugPrefix: 'films/' },
  'allLocationsJson': { component: 'Location.jsx', slugPrefix: 'locations/' },
  'allStaffJson': { component: 'Staff.jsx', slugPrefix: 'staff/' }
};

const getGraphqlPromises = (graphql) => Object.keys(taxMap).map(x => graphql(`
  {
    ${x} {
      edges {
        node {
          slug
        }
      }
    }
  }
`));

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return Promise.all(getGraphqlPromises(graphql)).then(results => {
    results
      .map(x => [x, Object.keys(x.data)])
      .forEach(([x, y]) =>
        x.data[y].edges.forEach(({ node }) => createPage({
          path: taxMap[y].slugPrefix + node.slug,
          component: path.resolve(`./src/templates/${taxMap[y].component}`),
          context: {
            slug: node.slug
          },
        }))
      );
  });
};
