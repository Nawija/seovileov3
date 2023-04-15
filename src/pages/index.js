import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroCompon } from "../components/index";

const IndexPage = ({ data }) => {
    const {
        allDatoCmsAboutArticle,
        allDatoCmsInfoSection,
        allDatoCmsAdvantage,
        allDatoCmsProjectHeader,
        allDatoCmsProjectArticle,
        allDatoCmsChooseAPlan,
        allDatoCmsPlanCard,
        allDatoCmsArticle,
        allDatoCmsNumberSection,
        allDatoCmsBadgesHeader,
        allDatoCmsBadgesPotin,
    } = data;

    return (
        <Layout>
            <HeroCompon />

            <section id="about" className="scroll-m-16 mb-6 md:mb-16">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            Projekty
                        </h2>

                        <p className="max-w-screen-md text-gray-500 w-[70%] md:text-lg text-center mx-auto">
                            t is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsAboutArticle.edges.map(({ node }) => (
                            <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-6">
                                <Link
                                    to={node.slug}
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
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

            <section className="text-gray-600 body-font">
                <div className="container py-6 md:py-12 px-5 pt-10 mx-auto">
                    {allDatoCmsBadgesHeader.edges.map(({ node }) => (
                        <div className="text-center mb-6 lg:mb-20">
                            <h4 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                                {node.header}
                            </h4>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                {node.description}
                            </p>
                        </div>
                    ))}

                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {allDatoCmsBadgesPotin.edges.map(({ node }) => (
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        className="text-[#27b5b9] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        {node.smallDescription}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="contact"
                className="text-gray-600 body-font relative bg-white"
            >
                <div className="container px-5 py-12 md:py-24 mx-auto flex md:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameborder="0"
                            title="map"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.3521304770245!2d-2.032411982954312!3d52.67323369185885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709fc4e084cc95%3A0x40b694cb9a80fb0!2sCannock%20WS11%200GS%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1681474121631!5m2!1spl!2spl"
                            style={{
                                filter: "grayscale(1) contrast(1.2) opacity(0.6)",
                            }}
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Cannock, Staffordshire WS11 0GS, GB
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <Link
                                    to="mailto:cezary.lenart@cklfacades.com"
                                    className="text-[#168585] leading-relaxed"
                                >
                                    cezary.lenart@cklfacades.com
                                </Link>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <Link
                                    to="tel:+447546677411"
                                    className="leading-relaxed"
                                >
                                    +447546677411
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-2xl">
                        <h2 className="text-[#168585] font-bold text-lg mb-1 title-font">
                            Form
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Write to us, we will reply within 24 hours
                        </p>
                        <div className="relative mb-2">
                            <label
                                htmlFor="name"
                                for="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-2">
                            <label
                                htmlFor="phone"
                                for="phone"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Tel
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="email"
                                for="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                for="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="btn border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                            Send Message
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsAboutArticle(limit: 4, sort: { date: DESC }) {
            edges {
                node {
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
        allDatoCmsInfoSection {
            edges {
                node {
                    description1
                    description2
                    header1
                    header2
                    img {
                        alt
                        gatsbyImageData
                    }
                    smallHeader
                }
            }
        }
        allDatoCmsAdvantage {
            edges {
                node {
                    description
                    descriptionPointx1
                    descriptionPointx2
                    descriptionPointx3
                    descriptionPointx4
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    smallHeader
                }
            }
        }
        allDatoCmsProjectHeader {
            edges {
                node {
                    header
                }
            }
        }
        allDatoCmsProjectArticle(
            limit: 3
            sort: { meta: { firstPublishedAt: DESC } }
        ) {
            edges {
                node {
                    description
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    slug
                }
            }
        }
        allDatoCmsNumberSection {
            edges {
                node {
                    number1
                    number2
                    number3
                    number4
                    word1
                    word2
                    word3
                    word4
                }
            }
        }
        allDatoCmsBadgesHeader {
            edges {
                node {
                    description
                    header
                }
            }
        }
        allDatoCmsBadgesPotin(sort: { meta: { firstPublishedAt: DESC } }) {
            edges {
                node {
                    smallDescription
                }
            }
        }
        allDatoCmsChooseAPlan {
            edges {
                node {
                    chooseAPlan
                }
            }
        }
        allDatoCmsPlanCard {
            edges {
                node {
                    pointc1
                    pointc2
                    pointc3
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    pointx5
                    price
                    price2
                    priceDeleted
                    priceDeleted2
                    promo
                    title
                    title2
                    smallHeader
                    smallHeader2
                }
            }
        }
        allDatoCmsArticle {
            edges {
                node {
                    description
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    pointx5
                    pointx6
                }
            }
        }
    }
`;

export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
