import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
    data: { datoCmsBlog, allDatoCmsBlog },
}) => {
    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative object-bottom flex items-center min-h-[12rem] max-h-[13rem] overflow-hidden justify-center w-full">
                    <div className="w-full -mt-4 -z-20">
                        <GatsbyImage
                            className="w-full h-full object-cover object-center absolute inset-0"
                            image={getImage(datoCmsBlog.img)}
                            alt={datoCmsBlog.title}
                        />
                        <div className="w-full h-full bg-gray-800/80 absolute top-0 left-0" />
                    </div>
                </div>

                <section class="container -mt-32 lg:-mt-24 px-3 mx-auto">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-start lg:text-left">
                            <div class="flex flex-col lg:flex-row items-center md:items-start">
                                <div className="lg:py-12 md:px-12 lg:-mr-14">
                                    <GatsbyImage
                                        className="h-72 w-72 xl:py-64 xl:px-64 rounded-xl shadow-lg"
                                        image={getImage(datoCmsBlog.img)}
                                        alt={datoCmsBlog.title}
                                    />
                                    <div className="flex items-start justify-end mx-3 space-x-4 my-4">
                                        <div className=" space-x-4">
                                            <FacebookShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsBlog.slug}`}
                                                quote={datoCmsBlog.seo.title}
                                                hashtag="#seovileo"
                                            >
                                                <div className="w-6 h-6">
                                                    <FacebookIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsBlog.slug}`}
                                                title={datoCmsBlog.seo.title}
                                                hashtags={["seovileo"]}
                                            >
                                                <div className="w-6 h-6">
                                                    <TwitterIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </TwitterShareButton>
                                            <PinterestShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsBlog.slug}`}
                                                media={datoCmsBlog.img.url}
                                                summary={
                                                    datoCmsBlog.seo.description
                                                }
                                                source="Seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <PinterestIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </PinterestShareButton>
                                            <WhatsappShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsBlog.slug}`}
                                                title={datoCmsBlog.seo.title}
                                                summary={
                                                    datoCmsBlog.seo.description
                                                }
                                                source="Seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <WhatsappIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-2">
                                    <div class="block mt-1 lg:mt-20 -tracking-wide rounded-lg py-3 lg:py-12 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold capitalize pb-2 mb-5">
                                            {datoCmsBlog.title}
                                        </h1>

                                        <div
                                            id="descHtml"
                                            dangerouslySetInnerHTML={{
                                                __html: datoCmsBlog.desc,
                                            }}
                                        />

                                        <Link
                                            to="/projekty"
                                            type="button"
                                            class="btn my-1 mr-4 scale-110"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Projekty
                                        </Link>

                                        <Link
                                            to="/kontakt"
                                            type="button"
                                            class="btn my-1 scale-110"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Kontakt
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="mt-2 mb-16 max-w-screen-xl mx-auto">
                    <p className="ml-4 lg:ml-[10vw] mb-4 font-semibold">
                        Wiecej Postów:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsBlog.edges.map(({ node }) => (
                            <div className="flex mx-6 flex-col md:flex-row items-start gap-4 lg:gap-6">
                                <Link
                                    to={`/blog/` + node.slug}
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(node.img)}
                                        alt={node.title}
                                        title={node.title}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-gray-900 w-full md:w-[80%] text-xl font-bold">
                                        <Link
                                            to={`/blog/` + node.slug}
                                            className="hoverLink active:text-gray-900 capitalize transition duration-100"
                                        >
                                            {node.seo.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-700 w-full capitalize md:w-[90%]">
                                        {node.seo.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsBlog } }) => (
    <Seo
        title={datoCmsBlog.seo.title}
        description={datoCmsBlog.seo.description}
        siteUrl={`https://seovileo.pl/blog/` + datoCmsBlog.slug}
    />
);

export default ProjectTemplate;

export const query = graphql`
    query ($slug: String) {
        datoCmsBlog(slug: { eq: $slug }) {
            img {
                url
                alt
                gatsbyImageData(
                    placeholder: NONE
                    height: 600
                    width: 600
                    forceBlurhash: false
                )
            }
            desc
            slug
            title
            seo {
                description
                title
            }
        }

        allDatoCmsBlog {
            edges {
                node {
                    img {
                        alt
                        gatsbyImageData(
                            placeholder: NONE
                            height: 224
                            width: 528
                            forceBlurhash: false
                        )
                    }
                    slug
                    title
                    seo {
                        description
                        title
                    }
                }
            }
        }
    }
`;
