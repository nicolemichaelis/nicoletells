import React from "react"
import styled from "styled-components"
import { Section } from "../styles"

import HtmlContent from "../components/HtmlContent"

const StyledSection = styled(Section)`
  flex-direction: column;
  margin: 0 0 50px;
`

const StyledHtmlContent = styled(HtmlContent)`
  margin: 0 20vw;

  @media (max-width: 481px) {
    margin: 0;
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }

  & > p:not(:first-of-type) {
    margin-top: var(--margin-p);
  }
`

const ObjectWrapper = styled.div`
  display: flex;
  margin-bottom: -15px;

  & h2 {
    text-align: left;
    margin-bottom: 0;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: -50px;
      width: 30px;
      transform: translate3d(0, -50%, 0);
      height: 2px;
      background: black;
    }
  }

  & > div {
    padding-left: 50px;
    padding-right: 0px;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    text-align: right;

    & h2 {
      text-align: right;

      &:after {
        left: unset;
        right: -50px;
      }
    }

    & > div {
      padding-left: 0px;
      padding-right: 50px;
    }
  }
`

const Object = styled.div`
  width: 50%;
`

const Type = styled.span`
  background: ${({$type}) => $type === "Talk" ? "var(--timeline-talk)" : "var(--timeline-workshop)"};
  color: ${({$type}) => $type === "Talk" ? "white" : "black"};
  border-radius: 9999px;
  padding: 3px 7px;
  font-size: 10px;
  text-transform: uppercase;
`

const StyledDate = styled.p`
  text-transform: uppercase;
  color: #555;
  font-size: 10px;
`

const TimelineObject = ({ title, type, body, date }) => {
  const jsDate = new Date(date)
  const month = jsDate.toLocaleString('default', { month: 'long' })
  const year = jsDate.getFullYear()

  return (
    <ObjectWrapper>
      <Object>

      </Object>
      <Object>
        {type !== "None" && <Type $type={type}>{type}</Type>}
        <h2>{title}</h2>
        <StyledDate>{month} {year}</StyledDate>
        <p>{body}</p>
      </Object>
    </ObjectWrapper>
  )
}

const Timeline = styled.div`
  position: relative;
  margin-top: 70px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: calc(100% + 69px + 70px);
    transform: translate3d(-50%, -70px, 0);
    // background: linear-gradient(180deg, ${({$t}) => $t.map((t) => t === "Talk" ? "var(--amethyst)" : (t === "Workshop" ? "var(--amazonite)" : "#555")).join(", ")});
    background: linear-gradient(180deg, transparent, black 140px);
  }
`

const TimelineEnd = styled.div`
  height: 70px;
  width: 100%;
  position: relative;
`

const TimelineEndBall = styled.div`
  background: black;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, 0, 0);
`

const TalksPageTemplate = ({ title, content, timeline }) => {

  // ${({t}) => t.map((t) => t === "talk")}
  console.log(timeline.map((t) => t.timelineType === "Talk" ? "var(--iolite)" : (t.timelineType === "Workshop" ? "var(--emerald)" : "var(--ruby)")).join(", "))

  timeline.sort((a, b) => {
    const c = new Date(b.timelineDate)
    const d = new Date(a.timelineDate)
    return c - d
  })

  return (
    <>
      <StyledSection>
        <h1>{title}</h1>
        <StyledHtmlContent content={content} />
        <Timeline $t={timeline.map((t) => t.timelineType)}>
          {timeline.map((t, i) => (
            <TimelineObject
              key={`${t.title}-${i}`}
              title={t.timelineTitle}
              date={t.timelineDate}
              type={t.timelineType}
              body={t.timelineBody}
            />
          ))}
        </Timeline>
        <TimelineEnd>
          <TimelineEndBall />
        </TimelineEnd>
      </StyledSection>
    </>
  )
}

export default TalksPageTemplate
