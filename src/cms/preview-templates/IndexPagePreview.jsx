import React from "react"

import IndexPageTemplate from "../../templates/IndexPageTemplate"

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        hero={data.body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
