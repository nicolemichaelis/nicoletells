import React from "react"
import { graphql } from "gatsby"

import PortfolioPageTemplate from "./PortfolioPageTemplate"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PortfolioPage = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <PortfolioPageTemplate
        title={post.frontmatter.title}
        body={post.html}
        projects={data.allMarkdownRemark.edges}
      />
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "portfolio-page"}}) {
      html
      frontmatter {
        title
      }
      excerpt(pruneLength: 150)
    }
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "project-page"}, showOnPortfolioPage: {eq: true}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            portfolioPageImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
