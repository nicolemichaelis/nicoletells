import React from "react"
import styled from "styled-components"
import { Section } from "../styles"

import HtmlContent from "../components/HtmlContent"

const StyledSection = styled(Section)`
  flex-direction: column;
  margin: 0 0 50px;
`

const StyledHtmlContent = styled(HtmlContent)`
  margin: ${({$inModal}) => $inModal ? "0" : "0 20vw"};

  @media (max-width: 481px) {
    margin: 0;
  }

  & > h2 {
    font-family: "Fraunces", "FrauncesVariable", serif;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: var(--h2-bottom-margin);
  }

  & > h2:not(:first-child) {
    margin-top: var(--h2-bottom-margin);
  }

  & > p {
    margin-top: var(--margin-p);
  }

  & > table {
    width: 100%;
    margin-top: var(--margin-p);

    & > thead {
      display: none;
    }

    & > tbody > tr > td:first-of-type {
      width: 30%;
      vertical-align: middle;
    }

    & > tbody > tr > td:not(first-of-type) {
      width: 70%;
    }
  }

  a {
    text-decoration: none;
    color: black;
    position: relative;

    &::before {
      z-index: -1;
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 1px;
      background: linear-gradient(45deg, var(--amethyst), var(--iolite));
      transition: height 100ms, opacity 100ms;
    }

    @media (hover) {
      &:hover::before {
        opacity: .2;
        height: 100%;
      }
    }
  }
`

const H1 = styled.h1`
  margin-bottom: 20px;
`

const ProjectPageTemplate = ({ title, body, inModal }) => {

  return (
    <StyledSection>
      <H1>{title}</H1>
      <StyledHtmlContent content={body} $inModal={inModal} />
    </StyledSection>
  )
}

export default ProjectPageTemplate
