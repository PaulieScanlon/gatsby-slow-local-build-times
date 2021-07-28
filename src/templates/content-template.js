import React from 'react';
import { graphql, Link } from 'gatsby';

const ContentTemplate = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ContentTemplate;
