import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"

import styled from "styled-components"
import { Section } from "../../styles"

import Testimonial from "../Testimonial"

SwiperCore.use([Autoplay, Navigation, Pagination])

const StyledSection = styled(Section)`
  flex-direction: column;
  justify-content: center;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
`

const Testimonials = ({ testimonialsTitle }) => {
const data = useStaticQuery(graphql`
  query OnlyTestimonials {
      allMarkdownRemark(filter: {fileAbsolutePath:{regex:"/testimonials/"}}) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              name
              testimonialImage {
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

  return (
    <StyledSection>
      <h1>{testimonialsTitle}</h1>
      <StyledSwiper
        navigation={true}
        pagination={true}
        loop={true}
        grabCursor={true}
        autoplay={{ "delay": 5000, "disableOnInteraction": true }}
      >
        {data.allMarkdownRemark.edges.map((t) => (
          <SwiperSlide
            key={t.node.id}
          >
            <Testimonial
              name={t.node.frontmatter.name}
              title={t.node.frontmatter.title}
              content={t.node.html}
              image={t.node.frontmatter.testimonialImage}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSection>
  )
}

export default Testimonials
