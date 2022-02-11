import React, { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { ModalContext } from "../Layout"

const Wrapper = styled.div`
  text-align: center;
  // padding: 20px 0 40px;
  margin: 20px 10px 40px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  isolation: isolate;
  cursor: pointer;
`

const FeaturedProject = ({ title, landingPageImage, i }) => {
  const image = getImage(landingPageImage)
  const modal = useContext(ModalContext)

  return (
    <Wrapper
      onClick={() => {
        modal.setActiveIndex(i)
        modal.toggleModal()
      }}
    >
      <StyledGatsbyImage
        image={image}
        alt={title}
      />
    </Wrapper>
  )
}

export default FeaturedProject
