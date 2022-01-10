import React from "react"

import ProjectPageTemplate from "../../templates/ProjectPageTemplate"

const ProjectPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  console.log("data: ", data)
  console.log("widgetFor: ", widgetFor("body"))

  if (data) {
    return (
      <ProjectPageTemplate
        title={data.title}
        body={widgetFor("body")}
        inModal={false}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProjectPagePreview
