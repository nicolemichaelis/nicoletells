import React from "react"
import styled from "styled-components"
import { Flex } from "../../styles"

import IconInstagram from "../../svgs/IconInstagram"
import IconLinkedin from "../../svgs/IconLinkedin"
import IconTwitter from "../../svgs/IconTwitter"

const StyledFooter = styled.footer`
  background: linear-gradient(90deg, #555, #000), linear-gradient(0deg, var(--iolite), var(--amethyst));
  background-blend-mode: difference;
  min-height: 35vh;
  padding: var(--padding-default);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const CopyContactInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-evenly;

  color: white;

  & a {
    text-decoration: none;
    color: white;
  }

  & a:hover {
    color: var(--citrine);
  }
`

const InvisiA = styled.a`
  cursor: default;
  color: white;
  text-decoration: none;

  &:hover {
    color: white !important;
  }
`

const SubTitleP = styled.p`
  line-height: 1;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
`

const SocialsWrapper = styled(Flex)`
  justify-content: center;
  margin: 10px 0;

  & > a > svg {
    margin: 0 10px;
    width: 36px;
    height: 36px;

    & > path {
      fill: white;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover > path {
      fill: var(--citrine);
    }
  }
`

const PromosWrapper = styled(Flex)`
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  color: white;

  & a {
    display: block;
    margin: 10px 0;
    width: 300px;
    text-align: center;
    text-decoration: none;
    color: white;
  }

  & a:hover {
    color: var(--citrine);
  }
`

const Promo = styled.p`
  font-family: "Fraunces", "FrauncesVariable", serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  margin: 2px 0;
`

const FlexColumn = styled(Flex)`
  width: 200px;
  margin: 10px 0;
  flex-direction: column;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <PromosWrapper>
        <a href="https://www.amazon.co.uk/Nobody-Cares-But-You-growing/dp/1948333120/ref=sr_1_1?keywords=nobody+cares+but+you+michaelis&qid=1577524409&sr=8-1" target="_blank" rel="noreferrer">
          <SubTitleP>Buy my book</SubTitleP>
          <Promo>Nobody Cares But You</Promo>
          <SubTitleP>on Amazon</SubTitleP>
        </a>
        <a href="https://open.spotify.com/show/68tt1i43PKfXqJ3SVL6Gjf?si=741c29885b6e4d11" target="_blank" rel="noreferrer">
          <SubTitleP>Listen to</SubTitleP>
          <Promo>Content Rookie Podcast</Promo>
          <SubTitleP>on Spotify</SubTitleP>
        </a>
        <a href="https://www.berghs.se/en/course/content-marketing/" target="_blank" rel="noreferrer">
          <SubTitleP>Check out my</SubTitleP>
          <Promo>Content Marketing Course</Promo>
          <SubTitleP>at Berghs School of Communication</SubTitleP>
        </a>
      </PromosWrapper>
      <SocialsWrapper>
        <a href="https://www.instagram.com/nicoletells" target="_blank" rel="noreferrer" aria-label="Instagram @nicoletells">
          <IconInstagram />
        </a>
        <a href="https://twitter.com/nicoletellsit" target="_blank" rel="noreferrer" aria-label="Twitter @nicoletellsit">
          <IconTwitter />
        </a>
        <a href="https://www.linkedin.com/in/nicoletells" target="_blank" rel="noreferrer" aria-label="LinkedIn @nicoletells">
          <IconLinkedin />
        </a>
      </SocialsWrapper>
      <CopyContactInfoWrapper>
        <FlexColumn>
          <p>&copy; {currentYear} Nicoletells AB</p>
        </FlexColumn>
        <FlexColumn>
          <SubTitleP>Phone</SubTitleP>
          <p><a href="tel:+46707193549">+46 (0) 70 - 719 35 49</a></p>
        </FlexColumn>
        <FlexColumn>
          <SubTitleP>E-mail</SubTitleP>
          <p><a href="mailto:hi@nicoletells.com">hi@nicoletells.com</a></p>
        </FlexColumn>
        <FlexColumn>
          <SubTitleP>Org. Nr.</SubTitleP>
          <p><InvisiA onClick={() => console.log("Click! :)")}>559174-7935</InvisiA></p>
        </FlexColumn>
      </CopyContactInfoWrapper>
    </StyledFooter>
  )
}

export default Footer
