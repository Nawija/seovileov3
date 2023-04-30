import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleCompon = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPoradnik {
                edges {
                    node {
                        img {
                            alt
                            gatsbyImageData
                        }
                        id
                        title
                        description
                    }
                }
            }
        }
    `);

    return (
        <>
            {data.allDatoCmsPoradnik.edges.map(({ node }, index) => {
                const postOrder =
                    index % 2 === 0
                        ? "order-0 lg:pr-24 md:pr-16 md:items-start md:text-left"
                        : "order-1 lg:pl-24 md:pl-16 md:items-end md:text-right";
                const changeBg =
                    index % 2 === 0
                        ? "bg-gray-100"
                        : "";
                return (
                    <section
                        key={node.id}
                        className={`text-gray-900 ${changeBg} body-font mx-auto`}
                    >
                        <div className="container max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div
                                className={`${postOrder} lg:flex-grow md:w-1/2 flex flex-col mb-16 md:mb-0 items-center text-center`}
                            >
                                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                    {node.title}
                                </h3>
                                <p className="mb-8 leading-relaxed">
                                    {node.description}
                                </p>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <GatsbyImage
                                    className="object-cover h-96 object-center rounded-lg"
                                    loading="lazy"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Strona Internetowa"}
                                />
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default ArticleCompon;
