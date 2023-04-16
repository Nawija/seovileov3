import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const { allDatoCmsPortfolio } = data;

    return (
        <Layout>
            <section className="relative flex items-center justify-center w-full ">
                <div className="relative w-full -z-20">
                    <StaticImage
                        className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        loading="eager"
                        alt="Facades project"
                        placeholder="blurred"
                    />
                    <svg
                        className="absolute -bottom-3 left-0 z-10"
                        width="2004"
                        height="154"
                        viewBox="0 0 2004 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 37.9955C0 37.9955 458.5 122.495 1002 37.9955C1545.5 -46.5045 2004 37.9955 2004 37.9955V153.996H0V37.9955Z"
                            fill="#ECECEC"
                        />
                    </svg>
                    <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
                </div>
            </section>

            <section
                className="scroll-m-16 -mt-8 lg:-mt-4 mb-6 md:mb-16"
            >
                <div className="max-w-screen-2xl px-4 md:px-6 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <p className="max-w-screen-md text-gray-500 w-[90%] md:text-lg text-center mx-auto">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-12">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <div className="flex flex-col items-center gap-4 lg:gap-6">
                                <Link
                                    to={`/` + node.slug}
                                    className="group w-full md:w-52 lg:w-52 h-56 md:h-52 lg:h-52 block self-center shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        loading="eager"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Facades"}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm">
                                        {node.date}
                                    </span>

                                    <h2 className="text-gray-800 w-[93%] lg:w-[90%] text-xl font-bold">
                                        <Link
                                            to={`/` + node.slug}
                                            className="hoverLink  active:text-gray-900 transition duration-100"
                                        >
                                            {node.naglowek}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 w-[93%] lg:w-[90%]">
                                        {node.krotkiTekst}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
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
                        alt
                        gatsbyImageData
                    }
                    krotkiTekst
                    link
                    naglowek
                    seoTekst
                    slug
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Strona wwww" />;

export default IndexPage;
