import React from "react"
import { graphql } from "gatsby"
import IndexPageTemplate from "./IndexPageTemplate"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import FeaturedProjects from "../components/FeaturedProjects"
import Marquee from "../components/Marquee"
import Testimonials from "../components/Testimonials"
import Skills from "../components/Skills"

const IndexPage = ({ data, location }) => {
  const markdownRemark = data.markdownRemark

  return (
    <Layout location={location}>
      <SEO
        title="Nicole Alexandra Michaelis"
        description="Personal website of Nichole Alexandra Michaelis - Poet, Senior UX Writer, and Content Strategist."
      />
      <IndexPageTemplate
        title={markdownRemark.frontmatter.title}
        subTitle={markdownRemark.frontmatter.subTitle}
        hero={markdownRemark.html}
        heroImage={markdownRemark.frontmatter.heroImage}
        aboutButton={markdownRemark.frontmatter.aboutButton}
      />
      <FeaturedProjects
        portfolioTitle={markdownRemark.frontmatter.portfolioTitle}
        portfolioButton={markdownRemark.frontmatter.portfolioButton}
      />
      <Skills />
      <Marquee />
      <Testimonials
        testimonialsTitle={markdownRemark.frontmatter.testimonialsTitle}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        subTitle
        aboutButton
        portfolioTitle
        portfolioButton
        testimonialsTitle
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
