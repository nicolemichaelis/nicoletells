import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section } from "../styles"

import HtmlContent from "../components/HtmlContent"

const StyledSection = styled(Section)`
  flex-direction: column;
  margin: 0 0 50px;
  padding: 20px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100px;
  isolation: isolate;
  border-top-left-radius: var(--rounded-corners);
  border-top-right-radius: var(--rounded-corners);
`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectWrapper = styled.div`
  min-height: 200px;
  background: white;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: stretch;
  border-radius: var(--rounded-corners);
  overflow: hidden;
  box-shadow: var(--shadow-elevation-medium);

  & > h2 {
    text-align: center;
    font-family: "Fraunces", "FrauncesVariable", serif;
    font-weight: 600;
    font-size: 18px;
    margin: 0 10px
  }

  & > p {
    margin: 0 10px 5px;
  }
`

const PortfolioProject = ({ title, description, portfolioPageImage}) => {
  const image = getImage(portfolioPageImage)

  return (
    <ProjectWrapper>
      <StyledGatsbyImage
        image={image}
        style={{height:"100px"}}
        imgStyle={{height:"100px"}}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectWrapper>
  )
}

const StyledHtmlContent = styled(HtmlContent)`
  margin-bottom: 20px;
`

const PortfolioPageTemplate = ({ title, body, projects }) => {

  return (
    <>
      <StyledSection>
        <h1>{title}</h1>
        <StyledHtmlContent content={body} />
        <ProjectsWrapper>
          {projects.map((p) => (
            <PortfolioProject
              key={p.node.frontmatter.title}
              title={p.node.frontmatter.title}
              description={p.node.frontmatter.description}
              portfolioPageImage={p.node.frontmatter.portfolioPageImage}
            />
          ))}
        </ProjectsWrapper>
      </StyledSection>
    </>
  )
}

export default PortfolioPageTemplate
