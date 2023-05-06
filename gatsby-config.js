/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/seovileov3",
    siteMetadata: {
        title: `Stwórz swoja stronę internetową`,
        description: `Tworzenie Szybkich i Przyjaznych dla SEO Stron Internetowych z Niezależnym Freelancerem Korzystającym z Technologii GatsbyJS`,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-zopfli",
            options: {
                extensions: ["css", "html", "js", "svg"],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-9RH800R54W"],
                pluginConfig: {
                    head: true,
                },
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
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
                pageSize: 500,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Open Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Coming+Soon&family=Open+Sans:wght@400;500;600;700&display=swap'`,
                    },
                ],
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                fluid: {
                    maxWidth: 1200,
                    maxHeight: 800,
                    sizes: [320, 768, 1024, 1280],
                    breakpoints: [320, 768, 1024],
                    fit: "inside",
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `CKL-Facades`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
