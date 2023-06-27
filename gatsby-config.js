/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    siteMetadata: {
        title: ``,
        description: `Tworzenie Szybkich i Przyjaznych dla SEO Stron Internetowych z Niezależnym Freelancerem Korzystającym z Technologii GatsbyJS`,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `blue`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `0e6621bdd35bb44a65efb5a356263a`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Seovileo`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
    ],
};
