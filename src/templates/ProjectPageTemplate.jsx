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

  @media (min-width: 1200px) {
    width: 60vw;
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
    background-image: linear-gradient(45deg, hsl(287deg 76% 50% / 1), hsl(253deg 100% 61% / 1));
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100% 5%;
    transition: background-size 100ms;

    @media (hover) {
      &:hover {
        background-size: 100% 100%;
        background-image: linear-gradient(45deg, hsl(287deg 76% 50% / .2), hsl(253deg 100% 61% / .2));
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
