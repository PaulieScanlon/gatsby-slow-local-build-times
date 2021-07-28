import React from 'react';
import { graphql, Link } from 'gatsby';

const IndexPage = ({
  data: {
    allMarkdownRemark: { nodes }
  }
}) => {
  return (
    <main>
      <h1>Index Page</h1>
      <ul>
        {nodes.map((node, index) => {
          const {
            frontmatter: { title },
            fields: { slug }
          } = node;
          return (
            <li key={index}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
