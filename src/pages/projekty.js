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

            <section className="mb-6 md:mb-16">
                <div className="max-w-screen-2xl px-4 md:px-6 mx-auto">
                    <div class="container -mt-12 px-6 mx-auto">
                        <section class="mb-16 text-gray-800">
                            <h1 class="text-3xl font-bold mb-4 text-center">
                                Wszystkie Projekty
                            </h1>
                            <p className="max-w-screen-xl text-gray-700 w-[90%] sm:w-[70%] md:text-lg text-center mx-auto mb-4">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                            </p>

                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allDatoCmsPortfolio.edges.map(({ node }) => (
                                    <div
                                        class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <GatsbyImage
                                            className="w-full h-96"
                                            loading="eager"
                                            image={getImage(
                                                node.img.gatsbyImageData
                                            )}
                                            alt={node.img.alt || "Projekt Strona Internetowa"}
                                        />
                                        <Link to={`/` + node.slug}>
                                            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                                                <div class="flex justify-start items-end h-full">
                                                    <div class="text-white m-6">
                                                        <h2 class="font-bold text-lg mb-3">
                                                            {node.naglowek}
                                                        </h2>
                                                        <p>
                                                            <small>
                                                                {node.data}
                                                            </small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
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
