const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryProjects = await graphql(`
        {
            allDatoCmsPortfolio {
                nodes {
                    slug
                }
            }
        }
    `);

    const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`);

    queryProjects.data.allDatoCmsPortfolio.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: projectTemplate,
            context: {
                slug,
            },
        });
    });

    const queryUsługi = await graphql(`
        {
            allDatoCmsUslugi {
                nodes {
                    slug
                }
            }
        }
    `);

    const uslugiTemplate = path.resolve(`./src/templates/uslugiTemplate.js`);

    queryUsługi.data.allDatoCmsUslugi.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: uslugiTemplate,
            context: {
                slug,
            },
        });
    });





    const queryBlog = await graphql(`
        {
            allDatoCmsBlog {
                nodes {
                    slug
                }
            }
        }
    `);

    const blogTemplate = path.resolve(`./src/templates/blogTemplate.js`);

    queryBlog.data.allDatoCmsBlog.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `/blog/` + slug,
            component: blogTemplate,
            context: {
                slug,
            },
        });
    });
};
