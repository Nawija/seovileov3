import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const ProjectPage = ({ data }) => {
    const { allDatoCmsPortfolio } = data;

    return (
        <Layout>
            <HeroLinks />
            <div class="container -mt-24 lg:-mt-32 px-2 mx-auto">
                <section class=" mb-6 md:mb-12 text-gray-800">
                    <div class="container mx-auto xl:px-32 text-center lg:text-left">
                        <div class="flex flex-col lg:flex-row items-center lg:items-start">
                            <div className="mb-4 -mt-10 md:mt-0 -z-10">
                                <StaticImage
                                    placeholder="blurred"
                                    quality={100}
                                    className="-rotate-[10deg] h-24 w-24 md:h-40 md:w-40 rounded-lg"
                                    src="../assets/browser.png"
                                    alt="przegladarki stron internetowych"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section
                id="projekty"
                className="mt-2 scroll-m-11 mb-16 max-w-screen-xl mx-auto"
            >
                <p className="ml-4 lg:ml-[10vw] mb-4 font-semibold">
                    Projekty:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                    {allDatoCmsPortfolio.edges.map(({ node }) => (
                        <div className="flex mx-12 flex-col md:flex-row items-start justify-center gap-4 lg:gap-6">
                            <Link
                                aria-label={node.title}
                                to={`/` + node.slug}
                                className="group w-full md:w-32 lg:w-44 h-56 md:h-28 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <GatsbyImage
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                    image={getImage(node.img)}
                                    alt={node.naglowek}
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    {node.date}
                                </span>

                                <h2 className="text-gray-800 w-full md:w-[70%] text-xl font-bold">
                                    <Link
                                        aria-label={node.title}
                                        to={`/` + node.slug}
                                        className="hoverLink active:text-gray-900 transition duration-100"
                                    >
                                        {node.naglowek}
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-full md:w-full">
                                    {node.krotkiTekst}
                                </p>

                                <div>
                                    <Link
                                        aria-label={node.title}
                                        to={`/` + node.slug}
                                        className="linkColor hoverLink active:text-gray-900 font-medium self-end transition duration-100"
                                    >
                                        Zobacz
                                    </Link>
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
    query MyQuery {
        allDatoCmsPortfolio(sort: { data: DESC }) {
            edges {
                node {
                    data
                    img {
                        gatsbyImageData(
                            placeholder: NONE
                            height: 160
                            width: 176
                            forceBlurhash: false
                        )
                    }
                    krotkiTekst
                    link
                    naglowek
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
