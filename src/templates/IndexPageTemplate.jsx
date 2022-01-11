import React from "react"

import Hero from "../components/Hero"

const IndexPageTemplate = ({ title, subTitle, hero, heroImage, aboutButton }) => {

  return (
    <>
      <Hero
        title={title}
        subTitle={subTitle}
        heroImage={heroImage}
        hero={hero}
        aboutButton={aboutButton}
      />
    </>
  )
}

export default IndexPageTemplate
