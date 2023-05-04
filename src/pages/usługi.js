import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import LiveBackground from "../components/liveBackground";

const Usługi = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsUslugi(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            alt
                            gatsbyImageData
                        }
                        opis
                        title
                        slug
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <div className="relative flex items-center justify-center w-full ">
                <LiveBackground />
                <div className="relative w-full -z-20">
                    <StaticImage
                        className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        loading="eager"
                        alt="Seovileo Strony internetowe"
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
                            fill="#f8f8f8"
                        />
                    </svg>
                    <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
                </div>
            </div>
            <section class="text-gray-700 body-font -mt-16 lg:-mt-20">
                <div class="container px-5 py-24 mx-auto max-w-screen-xl">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Strona Internetowa
                            </h1>
                            <div className=" bg-gradient-to-r from-amber-400 w-[30%] md:w-[23%] h-1 rounded-3xl lg:mb-6" />
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them man bun deep jianbing selfies heirloom prism
                            food truck ugh squid celiac humblebrag.
                        </p>
                    </div>
                    <div class="flex items-stretch flex-wrap -m-4">
                        {data.allDatoCmsUslugi.edges.map(({ node }) => (
                            <Link
                                to={`/` + node.slug}
                                class="xl:w-1/4 md:w-1/2 p-4 flex items-stretch justify-start flex-col"
                            >
                                <div class="bg-gray-100 h-full p-6 rounded-lg shadow-lg flex items-stretch justify-start flex-col relative">
                                    <GatsbyImage
                                        className="h-auto rounded w-3/4 mx-auto object-cover mb-6"
                                        loading="eager"
                                        placeholder="blurred"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={
                                            node.img.alt || "Strona Internetowa"
                                        }
                                    />
                                    <h3 class="tracking-widest text-amber-500 text-[12px] font-bold title-font">
                                        Usługa
                                    </h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                        {node.title}
                                    </h2>
                                    <p class="leading-relaxed text-base pb-10">
                                        {node.opis}
                                    </p>
                                    <p className="absolute right-2 bottom-2 px-2 py-1 text-sm font-bold">
                                        Więcej
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Usługi;
