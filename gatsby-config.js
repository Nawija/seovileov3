/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/seovileov3",
    siteMetadata: {
        title: `Stwórz swoja stronę internetową`,
        description: `Błyskawiczne strony internetowe, które zapewniają szybkie i płynne wrażenia użytkownikom. Korzystam z najnowszych technologii`,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-9RH800R54W", // Google Analytics / GA
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                    // Defaults to https://www.googletagmanager.com
                    origin: "YOUR_SELF_HOSTED_ORIGIN",
                    // Delays processing pageview events on route update (in milliseconds)
                    delayOnRouteUpdate: 0,
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
        `gatsby-plugin-sharp`,
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
