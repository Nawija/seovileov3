const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryProjects = await graphql(`
        {
            allDatoCmsPortfolio{
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
};
