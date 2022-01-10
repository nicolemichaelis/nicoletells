import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={`${title === "Nicole Alexandra Michaelis" ? "" :  title + " | "}Nicole Alexandra Michaelis`}
    meta={[
      {
        name: "description",
        content: description,
      }
    ]}
  />
)

export default SEO
