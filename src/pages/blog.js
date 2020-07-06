import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import BlogListing from './../components/BlogListing';

const BlogPageInner = (props) => {
  try {
    const posts = props.data.allMdx ? props.data.allMdx.edges : [];
    return <BlogListing posts={posts} />;
  } catch (e) {
    return <h2>Unable to find any blog posts.</h2>;
  }
};

const BlogPage = (props) => {
  return (
    <Layout>
      <BlogPageInner {...props} />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    allMdx(
      filter: {
        fields: { type: { eq: "post" } }
        frontmatter: { publish: { eq: true } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          fields {
            type
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            excerpt
            title
          }
        }
      }
    }
  }
`;
