import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import LiveBackground from "../../components/liveBackground";

const BlogPage = ({ data }) => {
    const { allDatoCmsBlog } = data;

    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative flex items-center h-[9.5rem] md:h-[19rem] overflow-hidden justify-center w-full">
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
                    <div className="absolute left-[10%] md:bottom-1/2 flex flex-col items-start justify-center text-white">
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

                <section className="py-6 md:py-10 max-w-screen-xl px-8 md:px-6 mx-auto">
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:mb-8 lg:grid-cols-4 md:gap-6 xl:gap-8">
                        {allDatoCmsBlog.edges.map(({ node }) => (
                            <Link
                                to={node.slug}
                                title={node.title}
                                className="mx-auto border border-yellow-500 overflow-hidden rounded-md"
                            >
                                <div class="relative flex h-32 items-end overflow-hidden rounded-xl  md:h-62">
                                    <GatsbyImage
                                        className="w-full h-full group-hover:scale-110 transition-transform duration-200"
                                        loading="eager"
                                        image={getImage(node.img)}
                                        alt={node.title}
                                    />
                                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <p className="absolute text-white text-[13px] rounded-xl font-semibold bg-gray-900/70 py-1 px-3 bottom-2 right-4">
                                        Zobacz
                                    </p>
                                </div>

                                <div className="p-2">
                                    <h2 class=" mt-2 font-bold -tracking-wide capitalize text-start text-gray-800">
                                        {node.title}
                                    </h2>
                                    <div className="border-b w-full h-1 rounded-3xl my-2" />
                                    <p className="text-sm font-medium">
                                        {node.sdesc}
                                    </p>
                                </div>
                            </Link>
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
                    img {
                        gatsbyImageData(
                            height: 128
                            width: 350
                            forceBlurhash: false
                            placeholder: NONE
                        )
                    }
                    slug
                    sdesc
                    title
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Seovileo" />;

export default BlogPage;
