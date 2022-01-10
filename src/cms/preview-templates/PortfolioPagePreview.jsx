import React from "react"

import PortfolioPageTemplate from "../../templates/PortfolioPageTemplate"

const PortfolioPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
    <>
      <PortfolioPageTemplate
        title={data.title}
        body={widgetFor("body")}
        projects={[]}
      />
    <section>{widgetFor("body")}</section>
    </>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default PortfolioPagePreview
