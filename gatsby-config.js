const path = require('path');
const metaConfig = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers'
          },
          {
            resolve: 'gatsby-remark-smartypants'
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#0000ff'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: metaConfig.ga
      }
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        },
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom` // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false // Important!
            }
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              margin: 36,
              scrollOffset: 0
            }
          },
          { resolve: 'gatsby-remark-autolink-headers' },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'High Contrast',
              inlineCode: {
                marker: '•'
              }
            }
          },
          { resolve: 'gatsby-remark-smartypants' },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          }
        ]
      }
    },

    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap'
  ]
};
