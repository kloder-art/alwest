import type { GatsbyConfig } from 'gatsby';

import path from 'path';

const config: GatsbyConfig = {
  pathPrefix: '/alwest',
  siteMetadata: {
    title: 'AlWest',
    description: 'Almería Media Collection',
    author: 'Javier López Úbeda <jlopezcur@gmail.com>',
  },
  mapping: {
    'MarkdownRemark.frontmatter.locations': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.actors': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.directors': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.actor': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.director': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.films': 'MarkdownRemark.frontmatter.id',
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
    // {
    //   resolve: 'gatsby-plugin-prefetch-google-fonts',
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Rye',
    //       },
    //     ],
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-embedder'],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'film',
        path: path.resolve('data/films/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'location',
        path: path.resolve('data/locations/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'staff',
        path: path.resolve('data/staff/'),
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

export default config;
