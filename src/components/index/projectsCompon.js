import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const ProjectsCompon = ({ data }) => {
    const datoCmsAboutArticle = data;
    return (
        <section id="about" className="scroll-m-16 mt-10 mb-6 md:mb-16">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                        Projekty
                    </h2>

                    <p className="max-w-screen-md text-gray-500 w-[70%] md:text-lg text-center mx-auto">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                    {datoCmsAboutArticle.nodes.map(({ node }) => (
                        <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-6">
                            <Link
                                to={node.slug}
                                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <GatsbyImage
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                    loading="eager"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Facades"}
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    {node.date}
                                </span>

                                <h2 className="text-gray-800 w-[93%] lg:w-[70%] text-xl font-bold">
                                    <Link
                                        to="/"
                                        className="hoverLink  active:text-gray-900 transition duration-100"
                                    >
                                        {node.header}
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-[93%] lg:w-[70%]">
                                    {node.description}
                                </p>

                                <div>
                                    <Link
                                        to={node.slug}
                                        className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Zobacz
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const query = graphql`
    query MyQuery {
        datoCmsAboutArticle{
            nodes {
                slug
                img {
                    alt
                    gatsbyImageData
                }
                header
                description
                date
            }
        }
    }
`;

export default ProjectsCompon;
