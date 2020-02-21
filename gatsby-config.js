module.exports = {
  pathPrefix: '/alwest',
  siteMetadata: {
    title: 'AlWest',
    description: 'Almería Media Collection',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
  },
  mapping: {
    'FilmsJson.locations': 'LocationsJson.slug',
    'FilmsJson.staff': 'StaffJson.slug',
    'LocationsJson.staff': 'StaffJson.slug',
    'LocationsJson.films': 'FilmsJson.slug',
    'StaffJson.films': 'FilmsJson.slug',
    'StaffJson.locations': 'LocationsJson.slug',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-embedder'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'films',
        path: `${__dirname}/data/films/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locations',
        path: `${__dirname}/data/locations/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'staff',
        path: `${__dirname}/data/staff/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'almeria-films',
        short_name: 'almeria',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'fullscreen',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
