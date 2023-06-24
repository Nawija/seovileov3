import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const ProjectPage = ({ data }) => {
    const { allDatoCmsProjekty } = data;

    return (
        <Layout>
            <HeroLinks />
            <section className="max-w-screen-lg mx-auto -mt-10 pb-10">
                <p className="title">Projekty</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center gap-2 px-2">
                    {allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="relative">
                            <div className="relative">
                                <GatsbyImage
                                    image={getImage(node.img)}
                                    alt={node.title}
                                />
                                <p className="absolute top-3 left-3 text-[12px] font-medium text-gray-700">
                                    {node.data}
                                </p>
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold mb-2">
                                    {node.title}
                                </p>
                                <Link
                                    className="btn flex items-center justify-center w-max mx-auto"
                                    target="_blank"
                                    to={node.link}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-1"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                    </svg>
                                    <p>Zobacz Live</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allDatoCmsProjekty(sort: { data: DESC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(
                            placeholder: NONE
                            height: 260
                            width: 260
                            forceBlurhash: false
                            aspectRatio: 1.5
                        )
                    }
                    data
                    sdesc
                    link
                    title
                    slug
                }
            }
        }
    }
`;

export const Head = () => (
    <Seo
        title="Strona wwww projekty - seovileo.pl"
        siteUrl="https://seovileo.pl/projekty"
    />
);

export default ProjectPage;
