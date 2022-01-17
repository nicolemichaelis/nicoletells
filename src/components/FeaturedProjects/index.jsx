import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"

import styled from "styled-components"
import { Section, Flex, CTAButton } from "../../styles"

import { ModalContext } from "../Layout"

import FeaturedProject from "../FeaturedProject"


const FlexColumn = styled(Flex)`
  flex-direction: column;

  & > h1 {
    margin: 50px 0;
  }

  & > button {
    margin: 50px 0 10px 0;
  }

  & > a {
    color: black;
    text-decoration: underline;
    margin: 10px 0 50px 0;

    &:hover {
      font-weight: 700;
    }

    &:active {
      font-weight: 700;
    }
  }
`

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  /* Change display to grid and uncomment for a more symmetrical design */
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  //
  // @media (max-width: 750px) {
  //   grid-template-columns: 1fr 1fr 1fr;
  // }
`

const FeaturedProjects = ({ portfolioTitle, portfolioButton, talksButton }) => {
  const data = useStaticQuery(graphql`
    query LandingPageProjects {
      allMarkdownRemark(
        filter: {frontmatter: {templateKey: {eq: "project-page"}, showOnLandingPage: {eq: true}}}
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              landingPageImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  const modal = useContext(ModalContext)

  useEffect(() => {
    if (data) {
      const projectCards = data.allMarkdownRemark.edges.map((t) => t)
      modal.setCards(projectCards)
    }
  }, [data])

  return (
    <Section>
      <FlexColumn>
        <h1>{portfolioTitle}</h1>
        <ProjectWrapper>
          {data.allMarkdownRemark.edges.map((t, i) => (
            <FeaturedProject
              key={t.node.id}
              i={i}
              title={t.node.frontmatter.title}
              landingPageImage={t.node.frontmatter.landingPageImage}
            />
          ))}
        </ProjectWrapper>
        <CTAButton
          onClick={() => navigate("/portfolio/")}
        >
          {portfolioButton}
        </CTAButton>
        <Link to="/talks/">
          {talksButton}
        </Link>
      </FlexColumn>
    </Section>
  )
}

export default FeaturedProjects
