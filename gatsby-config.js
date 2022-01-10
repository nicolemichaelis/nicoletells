module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nicoletells.com",
    title: "Nicole Alexandra Michaelis",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: "gatsby-plugin-react-helmet"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nicole Alexandra Michaelis",
        short_name: "Nicole Alexandra Michaelis",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#B620E0",
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "testimonials",
        path: `${__dirname}/src/testimonials/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "skills",
        path: `${__dirname}/src/skills/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marquee",
        path: `${__dirname}/src/marquee/`
      }
    },
    {
      resolve: "gatsby-plugin-image"
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "png", "webp"],
          placeholder: "dominantColor",
          // breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: "transparent"
        }
      }
    },
    {
      resolve: "gatsby-transformer-sharp"
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    }
  ],
}
