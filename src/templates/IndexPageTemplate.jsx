import React from "react"

import Hero from "../components/Hero"

const IndexPageTemplate = ({ title, subTitle, hero, heroImage }) => {

  return (
    <>
      <Hero
        title={title}
        subTitle={subTitle}
        heroImage={heroImage}
        hero={hero}
      />
    </>
  )
}

export default IndexPageTemplate
