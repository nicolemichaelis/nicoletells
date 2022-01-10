import React from "react"

const HtmlContent = ({ className, content }) => <div className={className} dangerouslySetInnerHTML={{ __html: content }} />

export default HtmlContent
