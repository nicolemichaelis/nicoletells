import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import AboutPageTemplate from "./AboutPageTemplate"

const AboutPage = ({ data, location }) => {
  const markdownRemark = data.markdownRemark

  return (
    <Layout location={location}>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.excerpt}
      />
      <AboutPageTemplate
        title={data.markdownRemark.frontmatter.title}
        aboutImage={data.markdownRemark.frontmatter.aboutImage}
        content={data.markdownRemark.html}
        eiffelTitle={markdownRemark.frontmatter.eiffelTitle}
        eiffelContent={markdownRemark.frontmatter.eiffelContent}
        documentTitle={markdownRemark.frontmatter.documentTitle}
        documentContent={markdownRemark.frontmatter.documentContent}
        rocketTitle={markdownRemark.frontmatter.rocketTitle}
        rocketContent={markdownRemark.frontmatter.rocketContent}
      />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        aboutImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        eiffelTitle
        eiffelContent
        documentTitle
        documentContent
        rocketTitle
        rocketContent
      }
      excerpt(pruneLength: 150)
    }
  }
`
