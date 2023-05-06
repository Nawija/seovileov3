import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsCompon = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPortfolio(sort: { data: DESC }, limit: 4) {
                edges {
                    node {
                        data
                        img {
                            alt
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                        krotkiTekst
                        link
                        naglowek
                        seoTekst
                        slug
                    }
                }
            }
        }
    `);

    return (
        <section class="relative pt-6 sm:pt-8 lg:pt-12 pb-10 bg-slate-100">
            <div class="mx-auto max-w-screen-xl px-2 md:px-10">
                <div class="flex flex-col sm:flex-row justify-between mb-4 px-3 items-center">
                    <h3 className="text-center sm:text-start text-xl md:text-2xl  text-gray-700 font-bold tracking-wide ">
                        Projekty www
                    </h3>
                    <Link
                        to="/projekty"
                        class="px-2 py-2 text-white mt-4 sm:mt-0 text-center font-medium text-sm rounded bg-gradient-to-tr from-emerald-800 to-emerald-600 shadow-emerald-800 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-200"
                    >
                        Wiecej Projektów
                    </Link>
                </div>
                <div class="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                    <p class="max-w-screen-sm px-4 text-sm font-medium text-center sm:text-start text-gray-500 lg:text-base">
                        Każdy z tych projektów był realizowany w technologii
                        GatsbyJS i zawierał wiele zaawansowanych
                        funkcjonalności, co pozwoliło na uzyskanie bardzo
                        szybkich i responsywnych stron internetowych
                    </p>
                </div>
                <div class="pb-6 grid grid-cols-2 gap-4 sm:px-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-4 xl:gap-8">
                    {data.allDatoCmsPortfolio.edges.map(({ node }) => (
                        <div>
                            <Link
                                to={node.slug}
                                class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-64"
                            >
                                <GatsbyImage
                                    className="w-full h-full hover:scale-110 transition-transform duration-200"
                                    loading="eager"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Strona Internetowa"}
                                />
                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-50"></div>

                                <span class="absolute bg-gray-900/50 text-[12px] rounded-3xl px-2 ml-2 mb-3 inline-block text-white md:ml-3">
                                    {node.naglowek}
                                </span>
                            </Link>
                            <div className="flex flex-col items-start justify-center text-start mt-4">
                                <div className="flex w-full px-4 mb-4 md:flex-row flex-wrap flex-col items-center justify-between">
                                    <p className="text-gray-600 text-center sm:text-start sm:w-[40%] text-sm">
                                        {node.data}
                                    </p>
                                    <p className="text-gray-800 font-medium text-center sm:text-start sm:w-[80%] text-sm">
                                        <strong className="font-medium">
                                            Strona Internetowa
                                        </strong>{" "}
                                        {node.naglowek}
                                    </p>
                                    <Link
                                        to={node.slug}
                                        className="text-center border-b-2 border-emerald-700 px-2 mt-2 py-2 text-emerald-700 md:hover:tracking-wider md:hover:text-amber-500 md:hover:border-amber-400  transition-all duration-200 md:font-bold text-sm rounded-lg font-semibold"
                                    >
                                        Zobacz Projekt &#8594;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsCompon;
