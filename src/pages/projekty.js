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
            <section className="max-w-screen-xl mx-auto">
                <div className="flex flex-wrap -m-4">
                    {allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="lg:w-1/3 w-full sm:w-1/2 p-4">
                            <div className="flex relative">
                                <GatsbyImage
                                    className="w-full h-full px-8 py-24 object-cover object-center relative group-hover:scale-110 transition duration-200"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                />
                                <div className="text-center absolute h-full z-10 w-full border-2 border-gray-200 transition-opacity bg-white opacity-0 hover:opacity-100">
                                    <p className="tracking-wide text-sm font-bold text-green-700 mb-1">
                                        PROJEKT
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 mb-3">
                                        {node.title}
                                    </p>
                                    <div className="flex flex-col items-center justify-center w-max mx-auto space-y-3">
                                        <Link
                                            to={"/projekty/" + node.slug}
                                            className="w-full py-2 px-4 border"
                                        >
                                            Szczegóły
                                        </Link>
                                        <Link
                                            to={node.link}
                                            className="w-full py-2 px-4 border"
                                        >
                                            Zobacz Live
                                        </Link>
                                    </div>
                                </div>
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
