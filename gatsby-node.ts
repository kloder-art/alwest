import type { CreatePagesArgs } from 'gatsby';

import path from 'path';

interface Node {
  sourceInstanceName: string;
  childMarkdownRemark: { frontmatter: { id: string } };
}

const getPath = (node: Node) =>
  `${node.sourceInstanceName}/${node.childMarkdownRemark.frontmatter.id}`;

const getComponent = (node: Node) =>
  path.resolve(`./src/templates/${node.sourceInstanceName}.tsx`);

type CreatePageFn = (first: {
  path: string;
  component: string;
  context: { id: string };
}) => void;

const processNode =
  (createPage: CreatePageFn) =>
  ({ node }) => {
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

interface Data {
  allFile: {
    edges: {
      node: Node;
    }[];
  };
}
export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
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
  (result.data as Data).allFile.edges.forEach(processNode(createPage));
};
