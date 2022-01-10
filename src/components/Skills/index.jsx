import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Section } from "../../styles"

import Skill from "../Skill"

const StyledSection = styled(Section)`
  padding: 50px 0;
  background: linear-gradient(90deg, #444, #000), linear-gradient(0deg, var(--sapphire), var(--amazonite));
  background-blend-mode: difference;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`

const Skills = () => {
  const data = useStaticQuery(graphql`
    query OnlySkills {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/skills/"}}
        sort: {fields: frontmatter___order, order: ASC}
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              skillImage {
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
      <SkillsContainer>
        {data.allMarkdownRemark.edges.map((t, i) => (
            <Skill
              i={i}
              key={t.node.id}
              title={t.node.frontmatter.title}
              content={t.node.html}
              skillImage={t.node.frontmatter.skillImage}
            />
        ))}
      </SkillsContainer>
    </StyledSection>
  )
}

export default Skills
