const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({
  node,
  getNode,
  actions: { createNodeField }
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    });
  }
};

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error loading your the content`, result.errors);
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach((content, index) => {
    createPage({
      path: content.fields.slug,
      component: path.resolve(`./src/templates/content-template.js`),
      context: {
        id: content.id
      }
    });
  });
};
