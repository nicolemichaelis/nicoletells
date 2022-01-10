import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 20px 0;
`

const MarqueeWrapper = styled.div`
  display: flex;
  width: fit-content;
  animation: marquee 60s linear infinite;
`

const InnerWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  & > div {
    margin: 0 20px;
  }
`

const ImageComponent = ({ img }) => {
  const image = getImage(img)

  return (
    <GatsbyImage
      image={image}
      alt=""
    />
  )
}

const Marquee = () => {
  const data = useStaticQuery(graphql`
    query MarqueeImages {
      markdownRemark(fileAbsolutePath: {regex: "/marquee/"}) {
        frontmatter {
          marqueeImages {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 100)
              id
            }
          }
        }
      }
    }
  `)

  return (
    <OuterWrapper>
      <MarqueeWrapper>
        <InnerWrapper>
          {data.markdownRemark.frontmatter.marqueeImages.map((img) => (
            <ImageComponent
              key={img.childImageSharp.id}
              img={img}
            />
          ))}
        </InnerWrapper>
        <InnerWrapper>
          {data.markdownRemark.frontmatter.marqueeImages.map((img) => (
            <ImageComponent
              key={img.childImageSharp.id}
              img={img}
            />
          ))}
        </InnerWrapper>
      </MarqueeWrapper>
    </OuterWrapper>
  )
}

export default Marquee
