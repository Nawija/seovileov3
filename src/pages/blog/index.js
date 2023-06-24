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
                <div className="relative flex items-center h-[9.5rem] md:h-[13rem] overflow-hidden justify-center w-full">
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
                    <div className="absolute left-[10%] md:top-1/3 flex flex-col items-start justify-center text-white">
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
                <div className="container mt-6 mb-12 mx-auto md:px-6">
                    <section>
                        <h2 className="mb-8 text-center text-2xl font-bold">
                            Ostatnie Artykuły
                        </h2>
                        <div className="grid gap-2 mx-2 sm:gap-6 grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                            {allDatoCmsBlog.edges
                                .slice(0, 4)
                                .map(({ node }) => (
                                    <div
                                        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        <GatsbyImage
                                            className="w-full align-middle transition duration-300 ease-linear"
                                            loading="eager"
                                            image={getImage(node.img)}
                                            alt={node.title}
                                        />
                                        <Link to={"/blog/" + node.slug}>
                                            <div className="w-full h-full bg-black/70 absolute inset-0 transition-colors hover:bg-black/60">
                                                <div className="flex h-full items-start justify-start">
                                                    <div className="m-4 text-white">
                                                        <h2 className="mb-2 text-sm sm:text-base font-bold">
                                                            {node.title}
                                                        </h2>
                                                        <p className="text-sm hidden sm:flex mb-2">
                                                            {
                                                                node.seo
                                                                    .description
                                                            }
                                                        </p>
                                                        <p className="hidden sm:flex">
                                                            <small>
                                                                Opublikowano{" "}
                                                                <u>
                                                                    {node.date}
                                                                </u>
                                                            </small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>

                        <div className="my-10 mx-auto md:px-6 max-w-screen-2xl">
                            <section className="text-center">
                                <h2 className="mb-8 pb-4 text-center text-2xl font-bold">
                                    Więcej Postów
                                </h2>

                                <div className="grid gap-2 mx-2 sm:gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
                                    {allDatoCmsBlog.edges
                                        .slice(0)
                                        .map(({ node }) => (

                                                <div className="relative block rounded-lg bg-white shadow-lg mb-20 mx-6 sm:mx-0 transition-all">
                                                    <div className="flex items-stretch justify-center">
                                                        <div className="relative">
                                                            <GatsbyImage
                                                                className="w-full rounded-md mx-auto"
                                                                loading="lazy"
                                                                image={getImage(
                                                                    node.img
                                                                )}
                                                                alt={node.title}
                                                            />
                                                            <Link
                                                                title={
                                                                    node.title
                                                                }
                                                                to={
                                                                    "/blog/" +
                                                                    node.slug
                                                                }
                                                            >
                                                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h2 className="mb-2 text-lg font-bold">
                                                            {node.seo.title}
                                                        </h2>
                                                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                                                            <small>
                                                                Data publikacji{" "}
                                                                <u>
                                                                    {node.date}
                                                                </u>
                                                            </small>
                                                        </p>
                                                        <p className="mb-4 pb-2">
                                                            {
                                                                node.seo
                                                                    .description
                                                            }
                                                        </p>
                                                        <Link
                                                            to={
                                                                "/blog/" +
                                                                node.slug
                                                            }
                                                            className="py-2 px-4 text-sm text-white font-medium bg-red-700 rounded-lg shadow-md shadow-red-400 transition-colors hover:bg-red-800"
                                                        >
                                                            Czytaj Post
                                                        </Link>
                                                    </div>
                                                </div>
                                        ))}
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allDatoCmsBlog(sort: { position: ASC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(
                            height: 200
                            width: 300
                            forceBlurhash: false
                            placeholder: NONE
                        )
                    }
                    date(locale: "pl", formatString: "DD.MM.YYYY")
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

export const Head = () => <Seo title="Seovileo" />;

export default BlogPage;
