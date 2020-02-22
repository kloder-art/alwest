const path = require('path');

const getPath = node =>
  `${node.sourceInstanceName}/${node.childMarkdownRemark.frontmatter.id}`;

const getComponent = node =>
  path.resolve(`./src/templates/${node.sourceInstanceName}.js`);

const processNode = createPage => ({ node }) => {
  if (node.childMarkdownRemark) {
    createPage({
      path: getPath(node),
      component: getComponent(node),
      context: {
        id: node.childMarkdownRemark.frontmatter.id,
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allFile {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              frontmatter {
                id
              }
            }
          }
        }
      }
    }
  `);
  result.data.allFile.edges.forEach(processNode(createPage));
};
