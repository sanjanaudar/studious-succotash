module.exports = {
    siteMetadata: {
      title: `Sanjana's Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
    ]
}