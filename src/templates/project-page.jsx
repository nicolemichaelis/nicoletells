import React from "react"
import { graphql } from "gatsby"

import ProjectPageTemplate from "./ProjectPageTemplate"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ProjectPage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.excerpt}
      />
      <ProjectPageTemplate
        title={data.markdownRemark.frontmatter.title}
        body={data.markdownRemark.html}
        inModal={false}
      />
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
      excerpt(pruneLength: 150)
    }
  }
`
