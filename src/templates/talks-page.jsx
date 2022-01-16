import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TalksPageTemplate from "./TalksPageTemplate"

const TalksPage = ({ data, location }) => {
  const markdownRemark = data.markdownRemark

  return (
    <Layout location={location}>
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
      />
    <TalksPageTemplate
        title={markdownRemark.frontmatter.title}
        content={markdownRemark.html}
        timeline={markdownRemark.frontmatter.timeline}
      />
    </Layout>
  )
}

export default TalksPage

export const pageQuery = graphql`
  query TalksPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "talks-page" } }) {
      html
      frontmatter {
        title
        timeline {
          timelineBody
          timelineDate
          timelineTitle
          timelineType
        }
      }
      excerpt(pruneLength: 150)
    }
  }
`
