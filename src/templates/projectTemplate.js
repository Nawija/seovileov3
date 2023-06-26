import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

import "../styles/template.css";

import {
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    WhatsappIcon,
} from "react-share";

import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton,
} from "react-share";

const ProjectTemplate = ({
    pageContext: { slug },
    data: { datoCmsProjekty, allDatoCmsProjekty },
}) => {
    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <HeroLinks />

                <section class="container -mt-36 lg:-mt-28 px-6 mx-auto">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-center lg:text-left">
                            <div class="flex flex-col lg:flex-row items-center">
                                <div>
                                    <GatsbyImage
                                        className="h-72 w-72 md:h-96 md:w-96 lg:py-72 lg:px-80 rounded-lg shadow-lg"
                                        image={getImage(datoCmsProjekty.img)}
                                        alt={datoCmsProjekty.title}
                                    />
                                    <div className="flex items-start justify-end mx-3 space-x-4 my-4">
                                        <div className=" space-x-4">
                                            <FacebookShareButton
                                                url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                                quote={datoCmsProjekty.title}
                                                hashtag="#seovileo"
                                            >
                                                <div className="w-6 h-6">
                                                    <FacebookIcon
                                                        size={33}
                                                        round={true}
                                                    />
                                                </div>
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                                title={datoCmsProjekty.title}
                                                hashtags={[
                                                    "seovileo",
                                                    "strona internetowa",
                                                ]}
                                            >
                                                <div className="w-6 h-6">
                                                    <TwitterIcon
                                                        size={33}
                                                        round={true}
                                                    />
                                                </div>
                                            </TwitterShareButton>
                                            <PinterestShareButton
                                                url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                                media={datoCmsProjekty.img.url}
                                                summary={datoCmsProjekty.title}
                                                source="Seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <PinterestIcon
                                                        size={33}
                                                        round={true}
                                                    />
                                                </div>
                                            </PinterestShareButton>
                                            <WhatsappShareButton
                                                url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                                title={datoCmsProjekty.title}
                                                summary={datoCmsProjekty.title}
                                                source="Seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <WhatsappIcon
                                                        size={33}
                                                        round={true}
                                                    />
                                                </div>
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-12 lg:mb-0">
                                    <div class="block rounded-lg px-6 py-4 lg:py-12 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold pb-2">
                                            {datoCmsProjekty.title}
                                        </h1>
                                        <p class="text-gray-500 mb-4 pb-2">
                                            {datoCmsProjekty.desc}
                                        </p>

                                        <Link
                                            to="/projekty"
                                            type="button"
                                            class="btn my-1 mr-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Projekty
                                        </Link>

                                        <Link
                                            to={datoCmsProjekty.link}
                                            target="_blank"
                                            type="button"
                                            class="btnEmerald my-1"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Zobacz Live
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="mt-2 mb-16 max-w-screen-xl mx-auto">
                    <p className="mb-6 font-semibold text-center">
                        Wiecej Projektów:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {allDatoCmsProjekty.edges.map(({ node }) => (
                            <div className="flex mx-6 flex-col items-center justify-center mb-4">
                                <Link
                                    to={`/projekty/` + node.slug}
                                    className="group w-3/5 h-32 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(node.img)}
                                        alt={node.title}
                                        title={node.title}
                                    />
                                </Link>

                                <div className="flex flex-col mt-3">
                                    <h2 className="text-gray-900 w-full text-base font-bold">
                                        <Link
                                            to={`/projekty/` + node.slug}
                                            className="hoverLink active:text-gray-900 capitalize"
                                        >
                                            {node.title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsProjekty } }) => (
    <Seo
        title={datoCmsProjekty.title}
        siteUrl={`https://seovileo.pl/` + datoCmsProjekty.slug}
    />
);

export default ProjectTemplate;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsProjekty(slug: { eq: $slug }) {
            img {
                url
                gatsbyImageData(layout: FULL_WIDTH)
            }
            link
            title
            desc
            slug
        }
        allDatoCmsProjekty(sort: { data: DESC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    title
                    slug
                }
            }
        }
    }
`;
