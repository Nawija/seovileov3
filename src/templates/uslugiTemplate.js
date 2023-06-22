import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import HeroLinks from "../components/HeroLinks";

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

import "../styles/template.css";

const ServiceTemp = ({
    pageContext: { slug },
    data: { datoCmsUsluga, allDatoCmsUsluga, allDatoCmsBlog },
}) => {
    const [navbar, setNavbar] = useState(false);
    const [itemsPosition, setItemsPosition] = useState(false);

    const changeBackground = () => {
        if (
            window.scrollY +
                document.getElementById("divFixed").offsetHeight -
                130 >=
            document.getElementById("wrapperFixed").offsetHeight
        ) {
            setNavbar(false);
        } else if (window.scrollY > 130) {
            setNavbar(true);
            setItemsPosition(true);
        } else {
            setNavbar(false);
            setItemsPosition(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);
    return (
        <Layout>
            <HeroLinks />
            <div
                className="flex flex-col
             lg:flex-row w-full z-10 -mt-10 md:-mt-2 max-w-[1400px] mx-auto"
            >
                <section class="container px-4 xl:px-24 mx-auto lg:w-4/5 xl:w-[90%]">
                    <section class=" text-gray-800">
                        <div class="mx-auto text-start lg:text-left md:px-12">
                            <div class="flex flex-col items-center">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold text-start pb-2 mb-3">
                                        {datoCmsUsluga.descUsluga[0].title}
                                    </h1>
                                    <GatsbyImage
                                        className="rounded-xl"
                                        image={getImage(
                                            datoCmsUsluga.descUsluga[0].img
                                        )}
                                        alt={datoCmsUsluga.descUsluga[0].title}
                                        title={
                                            datoCmsUsluga.descUsluga[0].title
                                        }
                                    />
                                </div>

                                <div class="block -mt-6 -tracking-wide rounded-lg text-start">
                                    <div class="text-lg pb-2">
                                        <div
                                            id="descHtml"
                                            dangerouslySetInnerHTML={{
                                                __html: datoCmsUsluga
                                                    .descUsluga[0].desc,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section
                    id="wrapperFixed"
                    className={`flex justify-center lg:justify-start w-full lg:w-[24%] mb-6 lg:mb-12 ${
                        itemsPosition ? "items-end" : "items-start"
                    }`}
                >
                    <div
                        id="divFixed"
                        className={`${navbar ? "lg:fixed top-20" : ""}`}
                    >
                        <div className="shadow-md text-sm border border-yellow-500 w-max mx-auto lg:mx-0 p-3 rounded-lg mb-12">
                            <p className="px-3 font-bold text-emerald-700">
                                Udostępnij w Social Media
                            </p>
                            <div className="flex items-center justify-start space-x-4 mx-3 my-4">
                                <FacebookShareButton
                                    url={`https://seovileo.pl/${datoCmsUsluga.slug}`}
                                    quote={datoCmsUsluga.title}
                                    hashtag="#seovileo"
                                >
                                    <div className="w-6 h-6">
                                        <FacebookIcon size={33} round={true} />
                                    </div>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={`https://seovileo.pl/${datoCmsUsluga.slug}`}
                                    title={datoCmsUsluga.descUsluga[0].title}
                                    hashtags={["seovileo"]}
                                >
                                    <div className="w-6 h-6">
                                        <TwitterIcon size={33} round={true} />
                                    </div>
                                </TwitterShareButton>
                                <PinterestShareButton
                                    url={`https://seovileo.pl/${datoCmsUsluga.slug}`}
                                    media={datoCmsUsluga.descUsluga[0].img.url}
                                    summary={datoCmsUsluga.title}
                                    source="seovileo.pl"
                                >
                                    <div className="w-6 h-6">
                                        <PinterestIcon size={33} round={true} />
                                    </div>
                                </PinterestShareButton>
                                <WhatsappShareButton
                                    url={`https://seovileo.pl/${datoCmsUsluga.slug}`}
                                    title={datoCmsUsluga.title}
                                    summary={datoCmsUsluga.desc}
                                    source="seovileo.pl"
                                >
                                    <div className="w-6 h-6">
                                        <WhatsappIcon size={33} round={true} />
                                    </div>
                                </WhatsappShareButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 max-w-xl mx-auto">
                            {allDatoCmsUsluga.edges.map(({ node }) => (
                                <Link
                                    to={`/` + node.slug}
                                    className="flex lg:flex-row items-center justify-center lg:justify-start group px-2 text-start"
                                >
                                    <div className="group p-1 mr-4 flex items-center justify-center overflow-hidden relative border-2 border-transparent shadow-lg shadow-yellow-600 bg-gradient-to-tr from-amber-500 to-amber-300 md:group-hover:border-yellow-500 group md:transition rounded-2xl md:group-hover:scale-[1.01] md:group-hover:shadow-amber-500">
                                        <GatsbyImage
                                            className="w-max h-max object-cover object-center group-hover:scale-95 transition"
                                            image={getImage(node.img)}
                                            alt={node.title}
                                            title={node.title}
                                        />
                                    </div>

                                    <div className="flex flex-col w-40">
                                        <h2 className="hoverLink text-sm font-medium my-2 capitalize">
                                            {node.title}
                                        </h2>
                                        <p className="text-[12px] bg-gradient-to-t from-emerald-700 to-emerald-600 font-medium w-20 text-center text-white px-1 rounded-xl">
                                            Zobacz
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-gray-100 py-12 md:py-16 lg:py-20 mt-4">
                    <p className="text-center text-xl font-semibold pb-6 md:pb-12 lg:pb-16 text-gray-700">Ciekawe Posty:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 max-w-screen-xl mx-auto">
                    {allDatoCmsBlog.edges.map(({ node }) => (
                        <Link
                            to={`/blog/` + node.slug}
                            className="flex border border-transparent md:hover:border-yellow-500 transition-colors rounded-lg p-4 flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 overflow-hidden"
                        >
                            <GatsbyImage
                                style={{ height: "200px", width: "90%" }}
                                image={getImage(node.img.gatsbyImageData)}
                                alt={node.title}
                                title={node.title}
                            />

                            <div className="flex flex-col gap-2 lg:w-2/3">
                                <h3 className="text-gray-900 w-full text-xl font-bold">
                                    {node.title}
                                </h3>

                                <p className="text-gray-800 w-full">
                                    {node.smallDescription}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsUsluga } }) => (
    <Seo
        title={datoCmsUsluga.seo.title}
        description={datoCmsUsluga.seo.description}
        siteUrl={`https://seovileo.pl/` + datoCmsUsluga.slug}
    />
);

export default ServiceTemp;

export const query = graphql`
    query ($slug: String) {
        datoCmsUsluga(slug: { eq: $slug }) {
            desc
            title
            slug
            img {
                gatsbyImageData(
                    placeholder: NONE
                    height: 64
                    width: 64
                    forceBlurhash: false
                )
            }
            seo {
                description
                title
            }
            descUsluga {
                title
                desc
                img {
                    alt
                    gatsbyImageData(height: 1248, placeholder: NONE)
                    title
                    url
                }
            }
        }
        allDatoCmsUsluga {
            edges {
                node {
                    title
                    slug
                    img {
                        gatsbyImageData(
                            height: 64
                            width: 64
                            forceBlurhash: false
                            placeholder: NONE
                        )
                    }
                }
            }
        }
        allDatoCmsBlog(sort: { position: ASC }) {
            edges {
                node {
                    description
                    img {
                        gatsbyImageData(
                            placeholder: NONE
                            height: 300
                            width: 300
                            aspectRatio: 0.5
                            outputPixelDensities: 0.5
                        )
                    }
                    slug
                    smallDescription
                    title
                    tag {
                        description
                        title
                    }
                }
            }
        }
    }
`;
