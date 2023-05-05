import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import "../styles/template.css";

const ProjectTemplate = ({
    pageContext: { slug },
    data: { datoCmsUslugi, allDatoCmsUslugi },
}) => {
    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <section className="relative object-bottom flex items-center h-[11rem] overflow-hidden justify-center w-full">
                    <div className="w-full -mt-4">
                        <GatsbyImage
                            className="w-full h-full object-cover object-center absolute inset-0"
                            image={getImage(datoCmsUslugi.img.gatsbyImageData)}
                            alt={datoCmsUslugi.img.alt}
                        />
                        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b bg-blend-multiply from-black/90 to-indigo-500/90" />
                    </div>
                </section>

                <section class="container px-6 mx-auto">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-center lg:text-left">
                            <div class="flex flex-col lg:flex-row items-start">
                                <div>
                                    <GatsbyImage
                                        className="h-72 w-72 -mt-24 lg:-mt-36 xl:py-64 xl:px-64 rounded-lg"
                                        image={getImage(
                                            datoCmsUslugi.img.gatsbyImageData
                                        )}
                                        alt={datoCmsUslugi.img.alt}
                                    />
                                </div>
                                <div class="mb-3 lg:mb-0">
                                    <div class="block mt-2 rounded-lg py-4 lg:py-12 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold pb-2">
                                            {datoCmsUslugi.title}
                                        </h1>
                                        <p class="text-gray-500 text-lg mb-4 pb-2">
                                            {datoCmsUslugi.opis}
                                        </p>

                                        <Link
                                            to="/projekty/#projekty"
                                            type="button"
                                            class="btn my-1 mr-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Projekty
                                        </Link>

                                        <Link
                                            to="/kontakt"
                                            class="btnEmerald my-1"
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

                <section
                    id="descriptionHtml"
                    className="max-w-screen-lg px-6 w-full mx-auto mb-4 md:mb-12 lg:mb-20"
                >
                    <h2 className="font-semibold -tracking-wide text-xl md:text-2xl mb-2">
                        {datoCmsUslugi.titlebig}
                    </h2>
                    <div
                        className="mb-6"
                        dangerouslySetInnerHTML={{
                            __html: datoCmsUslugi.descriptionbig,
                        }}
                    />
                </section>

                <section className="mt-2 mb-16 max-w-screen-xl mx-auto">
                    <p className="ml-4 lg:ml-[10vw] mb-4 font-semibold">
                        Wiecej Usług:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsUslugi.edges.map(({ node }) => (
                            <div className="flex mx-6 flex-col md:flex-row items-start justify-center gap-4 lg:gap-6">
                                <Link
                                    to={`/` + node.slug}
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-gray-800 w-full md:w-[70%] text-xl font-bold">
                                        <Link
                                            to={`/` + node.slug}
                                            className="hoverLink active:text-gray-900 transition duration-100"
                                        >
                                            {node.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 w-full md:w-[70%]">
                                        {node.opis}
                                    </p>

                                    <div>
                                        <Link
                                            to={`/` + node.slug}
                                            className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                        >
                                            Zobacz
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsUslugi } }) => (
    <Seo title={datoCmsUslugi.title} />
);

export default ProjectTemplate;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsUslugi(slug: { eq: $slug }) {
            img {
                url
                alt
                gatsbyImageData
            }
            opis
            title
            titlebig
            slug
            descriptionbig
        }
        allDatoCmsUslugi(sort: { meta: { firstPublishedAt: DESC } }) {
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
`;
