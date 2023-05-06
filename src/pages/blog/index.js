import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import LiveBackground from "../../components/liveBackground";

const IndexPage = ({ data }) => {
    const { allDatoCmsBlog } = data;

    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative flex items-center h-[9.5rem] md:h-[19rem] overflow-hidden justify-center w-full">
                    <svg
                        className="absolute w-full -bottom-1 left-0 z-0"
                        viewBox="0 0 2004 94"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2004 22.9898C2004 22.9898 1545.5 74.7165 1002 22.9898C458.5 -28.7372 0 22.9898 0 22.9898V94H2004V22.9898Z"
                            fill="#f1f5f9"
                        />
                    </svg>
                    <LiveBackground />
                    <div className="relative w-full h-full -mt-4 -z-20 ">
                        <StaticImage
                            quality={50}
                            loading="eager"
                            className="w-full h-full absolute inset-0"
                            src="../../assets/blogHero.jpg"
                            alt="projekt strona internetowa"
                        />
                        <div className="w-full h-full bg-black/70 absolute inset-0" />
                    </div>
                    <div className="absolute left-[10%] flex flex-col items-start justify-center text-white">
                        <div className="flex items-center justify-center text-sm font-semibold mt-12 md:mt-5 lg:mt-8">
                            <Link className="text-orange-500" to="/">
                                Strona Główna
                            </Link>
                            <span className="mx-2">\</span>
                            <p>Blog</p>
                        </div>
                        <h1 className="text-xl md:text-2xl">Blog</h1>
                    </div>
                </div>

                <section className="py-8 md:py-10 md:-mt-24 lg:-mt-40 max-w-screen-xl px-4 md:px-6 mx-auto">
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:mb-8 lg:grid-cols-4 md:gap-6 xl:gap-8">
                        {allDatoCmsBlog.edges.map(({ node }) => (
                            <div className="mx-auto md:hover:scale-105 transition-transform duration-200 border-2 p-3 rounded-xl shadow-lg bg-gray-100">
                                <div className="relative group">
                                    <Link
                                        to={node.slug}
                                        class="relative flex h-32 items-end overflow-hidden rounded-xl  md:h-62"
                                    >
                                        <GatsbyImage
                                            className="w-full h-full group-hover:scale-110 transition-transform duration-200"
                                            loading="eager"
                                            image={getImage(
                                                node.img.gatsbyImageData
                                            )}
                                            alt={node.title}
                                        />
                                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                        <p className="absolute text-white text-[13px] rounded-xl font-semibold bg-gray-900/70 py-1 px-3 bottom-2 right-4">
                                            Zobacz
                                        </p>
                                    </Link>
                                </div>

                                <div className="p-2">
                                    <h2 class=" mt-2 font-bold -tracking-wide capitalize text-start text-gray-800">
                                        {node.title}
                                    </h2>
                                    <div className="border-b w-full h-1 rounded-3xl my-2" />
                                    <p className="text-sm font-medium">{node.smallDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsBlog(sort: { position: ASC }) {
            edges {
                node {
                    description
                    img {
                        url
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    slug
                    smallDescription
                    title
                    tag {
                        description
                        title
                        twitterCard
                    }
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
