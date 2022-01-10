import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section } from "../styles"

import HtmlContent from "../components/HtmlContent"
import AboutDocument from "../svgs/AboutDocument"
import AboutEiffel from "../svgs/AboutEiffel"
import AboutRocket from "../svgs/AboutRocket"

const StyledDoc = styled(AboutDocument)`
  & path:nth-of-type(2) {
    fill: var(--ruby);
  }

  & path:nth-of-type(3) {
    fill: var(--amber);
  }

  & path:nth-of-type(4) {
    fill: var(--citrine);
  }
`

const StyledRocket = styled(AboutRocket)`
  & path:nth-of-type(2) {
    fill: var(--sapphire);
  }
`

const StyledSection = styled(Section)`
  flex-direction: column;
  margin: 0 0 50px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 9999px;
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;
  isolation: isolate;
  margin: 20px 0;
`

const StyledHtmlContent = styled(HtmlContent)`
  margin: 0 20vw;

  @media (max-width: 481px) {
    margin: 0;
  }

  & > p:not(:first-of-type) {
    margin-top: var(--margin-p);
  }
`

const H1 = styled.h1`
  line-height: 1;
`

const IconWrapper = styled.div`
  width: 60vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0 0;

  @media (max-width: 481px) {
    width: 100vw;
  }

  & > div {
    margin: 0 10px;
  }

  & > div > h2 {
    font-family: "Fraunces", "FrauncesVariable", serif;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    line-height: 1;
    margin: 5px 0;
  }

  & > div > svg {
    width: 48px;
    height: 48px;
    margin: 0 auto;
  }
`

const AboutPageTemplate = ({ title, aboutImage, content, eiffelTitle, eiffelContent, documentTitle, documentContent, rocketTitle, rocketContent }) => {
  const image = getImage(aboutImage)

  return (
    <>
      <StyledSection>
        <H1>{title}</H1>
        <StyledGatsbyImage
          image={image}
          alt={title}
        />
      <StyledHtmlContent content={content} />
        <IconWrapper>
          <div>
            <AboutEiffel />
            <h2>{eiffelTitle}</h2>
            <p>{eiffelContent}</p>
          </div>
          <div>
            <StyledDoc />
            <h2>{documentTitle}</h2>
            <p>{documentContent}</p>
          </div>
          <div>
            <StyledRocket />
            <h2>{rocketTitle}</h2>
            <p>{rocketContent}</p>
          </div>
        </IconWrapper>
      </StyledSection>
    </>
  )
}

export default AboutPageTemplate
