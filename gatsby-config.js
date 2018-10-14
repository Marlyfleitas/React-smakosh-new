const config = require('./data/Config')
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		siteUrl: 'https://smakosh.com',
		rssMetadata: {
			site_url: 'https://smakosh.com/blog',
			feed_url: `${config.url}${config.siteRss}`,
			title: 'Smakosh | Blog',
			description: config.description,
			image_url: 'https://smakosh.com/static/favicon/logo-512.png',
			author: config.author,
			copyright: `${config.title} © ${new Date().getFullYear()}`
		}
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-netlify',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
				},
				fetchOptions: {},
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Roboto',
					'Merriweather'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.MC_ENDPOINT,
			},
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://smakosh.com',
			},
		},
		{
			resolve: 'gatsby-plugin-feed',
			options: {
				query: `{
					site {
						siteMetadata {
							rssMetadata {
								site_url
								title
								author
								author
								copyright
								description
							}
						}
					}
				}`,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map(edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									url: site.siteMetadata.rssMetadata.site_url + edge.node.frontmatter.path,
									guid: site.siteMetadata.rssMetadata.site_url + edge.node.frontmatter.path,
									custom_elements: [{ 'content:encoded': edge.node.html }],
								})
							})
						},
						query: `{
							allMarkdownRemark(
								limit: 1000,
								sort: { order: DESC, fields: [frontmatter___date] }
							) {
								edges {
									node {
										excerpt
										html
										frontmatter {
											title
											path
											date
										}
									}
								}
							}
						}`,
						output: config.siteRss
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/assets/img/`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1080,
							linkImagesToOriginal: true,
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					'gatsby-remark-autolink-headers',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Smakosh',
				short_name: 'Smakosh',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		},
		'gatsby-plugin-offline'
	],
}
