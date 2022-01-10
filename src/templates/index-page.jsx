import React from "react"
import { graphql } from "gatsby"
import IndexPageTemplate from "./IndexPageTemplate"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import FeaturedProjects from "../components/FeaturedProjects"
import Marquee from "../components/Marquee"
import Testimonials from "../components/Testimonials"
import Skills from "../components/Skills"

const IndexPage = ({ data }) => {
  const markdownRemark = data.markdownRemark

  return (
    <Layout>
      <SEO
        title="Nicole Alexandra Michaelis"
        description="Personal website of Nichole Alexandra Michaelis - Poet, Senior UX Writer, and Content Strategist."
      />
      <IndexPageTemplate
        title={markdownRemark.frontmatter.title}
        subTitle={markdownRemark.frontmatter.subTitle}
        hero={markdownRemark.html}
        heroImage={markdownRemark.frontmatter.heroImage}
      />
      <FeaturedProjects />
      <Skills />
      <Marquee />
      <Testimonials />
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
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
