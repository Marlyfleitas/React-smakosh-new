module.exports = `
{
  legal: allMarkdownRemark(
    filter: { frontmatter: { type: { eq: "legal" } } }
  ) {
    edges {
      node {
        id
        frontmatter {
          path
        }
      }
    }
  }
  posts: allMarkdownRemark(
    filter: { frontmatter: { type: { ne: "legal" }, draft: { ne: true } } }
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 200
  ) {
    edges {
      node {
        description: excerpt(pruneLength: 260)
        id
        timeToRead
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          path
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
  tags: allTagsYaml {
    edges {
      node {
        title
      }
    }
  }
}
`
