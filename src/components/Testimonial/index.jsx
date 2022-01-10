import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import HtmlContent from "../HtmlContent"

const TestimonialWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0 40px;

  @media (max-width: 481px) {
    width: 80%;
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: 9999px;
  width: 200px;
  height: 200px;
  margin: 0 0 10px;
`

const NameTag = styled.p`
  font-family: "Fraunces", "FrauncesVariable", serif;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0 0;
`

const TitleTag = styled.p`
  font-weight: 600;
`

const StyledHtmlContent = styled(HtmlContent)`

`

const Testimonial = ({ name, title, image, content }) => {
  const gotImage = getImage(image)

  return (
    <TestimonialWrapper>
      <StyledGatsbyImage
        image={gotImage}
        alt={name}
      />
      <StyledHtmlContent content={content} />
      <NameTag>{name}</NameTag>
      <TitleTag>{title}</TitleTag>
    </TestimonialWrapper>
  )
}

export default Testimonial
