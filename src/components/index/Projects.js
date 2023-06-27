import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsCompon = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsProjekty(sort: { data: DESC }, limit: 4) {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                width: 300
                                placeholder: NONE
                                height: 300
                            )
                        }
                        data
                        title
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
                    <p class="max-w-screen-sm px-4 text-sm font-medium text-center sm:text-start text-gray-700 lg:text-base">
                        Każdy z tych projektów był realizowany w technologii
                        GatsbyJS i zawierał wiele zaawansowanych
                        funkcjonalności, co pozwoliło na uzyskanie bardzo
                        szybkich i responsywnych stron internetowych
                    </p>
                </div>
                <div class="pb-6 grid grid-cols-2 gap-4 sm:px-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-4 xl:gap-8">
                    {data.allDatoCmsProjekty.edges.map(({ node }) => (
                        <div>
                            <Link
                                to={"/projekty/" + node.slug}
                                class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-64"
                            >
                                <GatsbyImage
                                    className="w-full h-full hover:scale-110 transition-transform duration-200"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                />
                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-50"></div>

                                <span class="absolute bg-gray-900/50 text-[12px] rounded-3xl px-2 ml-2 mb-3 inline-block text-white md:ml-3">
                                    {node.title}
                                </span>
                            </Link>
                            <div className="flex w-full px-4 my-4 flex-row items-center justify-between">
                                <p className="text-gray-700 text-center sm:text-start text-sm">
                                    {node.data}
                                </p>
                                <Link
                                    to={"/projekty/" + node.slug}
                                    className="text-gray-800 font-bold text-center sm:text-start text-sm"
                                >
                                    Więcej
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsCompon;
