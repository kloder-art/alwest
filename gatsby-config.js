module.exports = {
  siteMetadata: {
    title: 'Almeria Films',
    description: 'Peliculas de Almería.',
    author: '@kloder',
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
        linkStyles: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'films',
        path: `${__dirname}/src/data/films/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locations',
        path: `${__dirname}/src/data/locations/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'staff',
        path: `${__dirname}/src/data/staff/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
