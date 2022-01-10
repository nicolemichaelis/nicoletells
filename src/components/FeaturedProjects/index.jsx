import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"

import styled from "styled-components"
import { Section, Flex } from "../../styles"

import { ModalContext } from "../Layout"

import FeaturedProject from "../FeaturedProject"

SwiperCore.use([Autoplay, Navigation, Pagination])

const FlexColumn = styled(Flex)`
  flex-direction: column;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
`

const FeaturedProjects = () => {
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
        <h1>This is what I&apos;ve done</h1>
        <StyledSwiper
          navigation={true}
          pagination={true}
          loop={true}
          grabCursor={true}
          slidesPerView={4}
          autoplay={{ "delay": 5000, "disableOnInteraction": true }}
        >
          {data.allMarkdownRemark.edges.map((t, i) => (
            <SwiperSlide
              key={t.node.id}
            >
              <FeaturedProject
                i={i}
                title={t.node.frontmatter.title}
                landingPageImage={t.node.frontmatter.landingPageImage}
              />
          </SwiperSlide>
          ))}
        </StyledSwiper>
      </FlexColumn>
    </Section>
  )
}

export default FeaturedProjects
