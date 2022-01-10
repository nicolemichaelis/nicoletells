const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query PageQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((edge) => {
    const id = edge.node.id
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`),
      context: {
        id
      }
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
