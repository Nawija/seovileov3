const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryUsługa = await graphql(`
        {
            allDatoCmsUsluga {
                nodes {
                    slug
                }
            }
        }
    `);

    const uslugiTemplate = path.resolve(`./src/templates/uslugiTemplate.js`);

    queryUsługa.data.allDatoCmsUsluga.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: uslugiTemplate,
            context: {
                slug,
            },
        });
    });

    const queryProjects = await graphql(`
        {
            allDatoCmsProjekty {
                nodes {
                    slug
                }
            }
        }
    `);

    const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`);

    queryProjects.data.allDatoCmsProjekty.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `/projekty/${slug}`,
            component: projectTemplate,
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
