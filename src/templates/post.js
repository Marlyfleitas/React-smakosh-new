import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SmallerContainer, SEO, Post } from 'components/common'
import './highlight.css'

const PostTemplate = ({ data: { post } }) => (
  <Layout>
    <SmallerContainer>
      <SEO
        type="NewsArticle"
        title={post.frontmatter.title}
        articleBody={post.description}
        datePublished={post.frontmatter.normalDate}
        dateModified={
          post.frontmatter.edited
            ? post.frontmatter.edited
            : post.frontmatter.date
        }
        cover={
          post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
            .fallback.src
        }
        location={post.frontmatter.path}
        description={post.description}
        readTime={post.timeToRead}
      />
      <Post {...post} />
    </SmallerContainer>
  </Layout>
)

export default PostTemplate

export const postQuery = graphql`
  query ($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      description: excerpt(pruneLength: 105)
      timeToRead
      frontmatter {
        normalDate: date
        date(formatString: "MMMM DD, YYYY")
        edited(formatString: "MMMM DD, YYYY")
        path
        title
        next
        id
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`
