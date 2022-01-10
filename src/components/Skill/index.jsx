import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Flex } from "../../styles"

import HtmlContent from "../HtmlContent"

const FlexRow = styled(Flex)`
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
  color: white;

  &:nth-of-type(odd) {
    flex-direction: row-reverse;
  }
`

const SkillDiv = styled.div`
  padding: var(--padding-default);
  width: var(--content-max-width);
`

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 350px;

  & > svg,
  & > div {
    grid-area: 1 / 1 / auto / auto;
  }
`

const StyledSvg = styled.svg`
  line-height: 1;
  width: 340px;

  &:first-of-type > path {
    transform-origin: center;
    stroke-width: 0px;
    fill: rgba(255, 255, 255, 1);
    animation: pulse 2s linear infinite;
  }

  &:nth-of-type(2) > path {
    transform-origin: center;
    stroke-width: 2px;
    stroke: rgba(255, 255, 255, .5);
    fill: none;

    animation: snake 10s ${({$i}) => $i * 10}s linear alternate infinite;
  }
`

const H2 = styled.h2`
  text-align: center;
  font-family: "Fraunces", "FrauncesVariable", serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--h2-bottom-margin);
`

const StyledContent = styled(HtmlContent)`


  & ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    list-style: none;
    padding-inline-start: 0;
    justify-items: center;
    align-items: flex-start;
  }

  & ul li {
    background-color: rgba(255, 255, 255, .15);
    border-radius: var(--rounded-corners);
    padding: 5px 10px;
  }

  & > p:not(:first-of-type) {
    margin-top: var(--margin-p);
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;
  border-radius: 9999px;
`

const Skill = ({ i, title, content, skillImage }) => {
  const image = getImage(skillImage)

  return (
    <FlexRow>

      <ImageWrapper>
        <StyledGatsbyImage
          image={image}
          alt={title}
        />
        <StyledSvg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,170
            a 170,170 0 1,1 340,0
            a 170,170 0 1,1 -340,0"/>
        </StyledSvg>
        <StyledSvg $i={i} viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,170
            a 160,160 0 1,1 320,0
            a 160,160 0 1,1 -320,0"/>
        </StyledSvg>
      </ImageWrapper>

      <SkillDiv>
        <H2>{title}</H2>
        <StyledContent content={content}/>
      </SkillDiv>
    </FlexRow>
  )
}

export default Skill
