import React from "react"

import AboutPageTemplate from "../../templates/AboutPageTemplate"

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        aboutImage={data.aboutImage}
        content={data.body}
        eiffelTitle={data.eiffelTitle}
        eiffelContent={data.eiffelContent}
        documentTitle={data.documentTitle}
        documentContent={data.documentContent}
        rocketTitle={data.rocketTitle}
        rocketContent={data.rocketContent}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview
