import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const { allDatoCmsBlog } = data;

    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative object-bottom flex items-center min-h-[11rem] overflow-hidden justify-center w-full">
                    <div className="w-full -mt-4 -z-20 ">
                        <StaticImage
                            className="w-full h-full object-cover object-center absolute inset-0"
                            src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2446&q=80"
                            alt="projekt strona internetowa"
                        />
                        <div className="w-full h-full bg-black/80 absolute inset-0" />
                    </div>
                    <div className="absolute left-[10%] flex flex-col items-start justify-center text-white">
                        <div className="flex items-center justify-center text-sm font-semibold mt-4">
                            <Link className="text-orange-500" to="/">
                                Strona Główna
                            </Link>
                            <span className="mx-2">\</span>
                            <p>Blog</p>
                        </div>
                        <h1 className="text-2xl">Blog</h1>
                    </div>
                </div>

                <section className="py-8 md:py-10 max-w-screen-xl px-4 md:px-6 mx-auto">
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 md:gap-6 xl:gap-8">
                        {allDatoCmsBlog.edges.map(({ node }) => (
                            <div>
                                <Link
                                    to={node.slug}
                                    class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-62"
                                >
                                    <GatsbyImage
                                        className="w-full h-62 group-hover:scale-110 transition-transform duration-200"
                                        loading="eager"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={
                                            node.img.alt || "Strona Internetowa"
                                        }
                                    />
                                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <p className="absolute group text-white text-sm rounded-xl font-semibold bg-gray-900/70 py-2 px-4 bottom-2 right-4">
                                        Zobacz
                                    </p>
                                </Link>
                                <div className="p-2">
                                    <h2 class="text-lg font-bold text-start  text-gray-800">
                                        {node.title}
                                    </h2>
                                    <div className=" bg-gradient-to-r from-amber-400 w-1/3 h-1 rounded-3xl mb-4" />
                                    <p>{node.smallDescription}</p>
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
                        alt
                        gatsbyImageData
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

export const Head = () => <Seo title="Strona wwww" />;

export default IndexPage;
