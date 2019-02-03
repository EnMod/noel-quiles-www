require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  // put common bits in the siteMetadata
  siteMetadata: {
    title: `Noel Quiles (.com)`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_RO,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false

        // Custom API base URL
        // apiUrl: "https://site-api.datocms.com"
      }
    }
  ]
}
