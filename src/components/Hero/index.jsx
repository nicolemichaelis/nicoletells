import React from "react"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Flex, CTAButton } from "../../styles"

import HtmlContent from "../HtmlContent"

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 9999px;
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;
  isolation: isolate;
`
// hsl(253, 100%, 61%)
// hsl(287, 76%, 50%)
const StyledSection = styled(Section)`
  background: linear-gradient(90deg, #000, #555), linear-gradient(0deg, var(--iolite), var(--amethyst));
  background-blend-mode: difference;
  flex-direction: column;
  justify-content: center;
  color: white;

  & div {
    margin: 20px 0;
  }
`

const FlexRow = styled(Flex)`
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StyledContent = styled(HtmlContent)`
  max-width: var(--content-max-width);

  & > p:not(:first-of-type) {
    margin-top: var(--margin-p);
  }
`

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;

  & > svg,
  & > div {
    grid-area: 1 / 1 / auto / auto;
  }
`

const StyledSvg = styled.svg`
  line-height: 1;
  z-index: 1;
  width: 340px;
  fill: var(--citrine);
  font-family: "Fraunces", "FrauncesVariable", serif;
  font-size: 14px;
  font-weight: 800;
  animation: rotate 60s linear infinite;
`

const Hero = ({ title, subTitle, hero, heroImage, aboutButton }) => {
  const image = getImage(heroImage)

  return (
    <StyledSection>
      <h2>{subTitle}</h2>
      <h1>{title}</h1>
      <FlexRow>

        <ImageWrapper>
          <StyledGatsbyImage
            image={image}
            alt={title}
          />
          <StyledSvg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="MyPath" d="M15,170
                a 155,155 0 1,1 310,0
                a 155,155 0 1,1 -310,0"/>

            </defs>
            <text>
              <textPath href="#MyPath" side="left" textLength="970">Nicole Alexandra Michaelis – Nicole Alexandra Michaelis – Nicole Alexandra Michaelis – Nicole Alexandra Michaelis – Nicole Alexandra Michaelis –</textPath>
            </text>
          </StyledSvg>
        </ImageWrapper>

        <StyledContent
          content={hero}
        />

      </FlexRow>

      <CTAButton
        onClick={() => navigate("/about/")}
      >
        {aboutButton}
      </CTAButton>

    </StyledSection>
  )
}

export default Hero
